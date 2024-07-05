import { PortableText } from '@portabletext/react'
import React from 'react'
import { getServicesDetails } from "../../../../sanity/sanity.query"

const ServiceDetailPage = async ({ params }) => {
    const serviceDetails = await getServicesDetails(params.slug)

    return (
        <div key={serviceDetails._id}>
            <h1>{serviceDetails.title}</h1>
            <p>{serviceDetails.description}</p>

            {/* <img /> */}

            <PortableText
                value={serviceDetails.content}
            // components={

            // }
            />


        </div>
    )
}

export default ServiceDetailPage