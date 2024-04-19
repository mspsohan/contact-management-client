class Contact {
	readonly _id: string;
	readonly name: string;
	readonly email: string;
	readonly telephone: string;
	readonly address: string;
	readonly img: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;

	constructor(
		name: string,
		email: string,
		telephone: string,
		address: string,
		img: string,
		createdAt: Date,
		updatedAt: Date,
		_id: string,
	) {
		this.name = name;
		this.email = email;
		this.telephone = telephone;
		this.address = address;
		this.img = img;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this._id = _id;
	}
}

export default Contact;
