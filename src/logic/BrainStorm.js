import firebase from "firebase/app";
import "firebase/database";

class BrainStorm {
	ref = null;

	constructor(ref) {
		this.ref = ref;
	}

	Init = async (user, name) => {
		const brainStorm = {
			Members: [{ user, color: "#fff" }],
			Data: {
				name,
				children: {},
			},
		};

		const id = await (await firebase.database().ref("data").push()).key;
		console.log(id);
		await firebase.database().ref("data").child(id).set(brainStorm);

		this.ref = "data/" + id;
	};

	AddIdea = async (name) => {
		let idea = {
			name,
			children: {},
		};

		const id = await (
			await firebase
				.database()
				.ref(this.ref)
				.child("Data")
				.child("children")
				.push()
		).key;
		idea.id = id;
		await firebase
			.database()
			.ref(this.ref)
			.child("Data")
			.child("children")
			.child(id)
			.set(idea);
		return id;
	};

	DeleteIdea = async (id) => {
		await firebase
			.database()
			.ref(this.ref)
			.child("Data")
			.child("children")
			.child(id)
			.remove();
	};
}

export default BrainStorm;
