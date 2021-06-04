import firebase from "firebase/app";
import "firebase/database";

class BrainStorm {
	ref = null;

	constructor(id) {
		if (id !== undefined) {
			this.ref = "data/" + id;
		}
	}

	itExists = async () =>
		this.ref == null
			? false
			: (await firebase.database().ref(this.ref).once("value")).exists();

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
		return id;
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

	Fetch = (dispatcher) => {
		firebase
			.database()
			.ref(this.ref)
			.on("value", (snapshot) => {
				let state = snapshot.val();
				dispatcher(state);
			});
	};
}

export default BrainStorm;
