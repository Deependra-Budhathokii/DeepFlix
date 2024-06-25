import mongoose from 'mongoose'

// creating Schema
const contactSchema = mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        message: { type: String, required: true },
    }

    // { timestamp: true }
)

// compiling Schema | creating model,   kind of creating collection
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact
