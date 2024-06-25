import styles from '@/app/contact/contact.module.css'
import Contactcard from '@/components/Contactcard'
// import Contactform from '@/components/Contactform'
import NewContactform from '@/components/NewContactform'
import ContactModel from '@/app/models/Contact'
import connectDB from '@/app/utils/connectDB'

const contact = () => {
    // Create Function defined
    // const create = async (formData) => {
    //     'use server'
    //     try {
    //         await connectDB()
    //         const result = await ContactModel.create({
    //             username: formData.get('username'),
    //             phone: formData.get('phone'),
    //             email: formData.get('email'),
    //             message: formData.get('message'),
    //         })

    //         // console.log('DeepStat:', statuss)

    //         // return { status: 'success', message: 'Your message has been successfully submitted!' }

    //         // console.log('Result: ', result)
    //     } catch (error) {
    //         console.error('Error creating contact:', error)
    //         return { status: 'error', message: 'Something went wrong. Please try again.' }
    //     }
    // }

    return (
        <section className="container">
            <h1 className="text-4xl font-bold text-center">Contact Page</h1>
            <Contactcard />

            <div className="flex flex-col items-center justify-center h-screen contact-section my-14">
                <h2 className="text-3xl mb-11">
                    We'd love to hear <span className="text-[#e50914]"> from you </span>
                </h2>
                {/* <Contactform />    */} {/* old method comp */}
                <NewContactform />
            </div>

            <div className="flex justify-center map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56519.7590713944!2d85.39550886356174!3d27.702309703106803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b2c1cbcb295%3A0x67ba8bca0c5ec26f!2sChangunarayan!5e0!3m2!1sen!2snp!4v1718798543783!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}

export default contact
