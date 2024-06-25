'use server'
import ContactModel from '@/app/models/Contact'
import connectDB from '@/app/utils/connectDB'

export const createUser = async (prevState, formData) => {
    try {
        await connectDB()
        const result = await ContactModel.create({
            message: formData.get('message'),
            username: formData.get('username'),
            phone: formData.get('phone'),
            email: formData.get('email'),
        })

        return { status: 'success' }
        // return { status: 'success', message: 'Your message has been successfully submitted!' }
        // return { message: 'Your message has been successfully submitted!' }

        // console.log('Result: ', result)
    } catch (error) {
        console.error('Error creating contact:', error)

        // return { status: 'error', message: 'Something went wrong. Please try again.' }
        return { status: 'error' }
    }
}

// create().then((response) => console.log(response.message))
