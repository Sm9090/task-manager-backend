const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		completed: { type: Boolean, default: false },
	},
	{
		timestamps: { createdAt: 'createdAt', updatedAt: false },
		toJSON: { virtuals: true, versionKey: false },
		toObject: { virtuals: true },
	}
);

taskSchema.virtual('id').get(function () {
	return this._id.toString();
});

module.exports = mongoose.model('Task', taskSchema);
