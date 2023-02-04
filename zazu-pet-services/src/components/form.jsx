import React, { useState } from "react";

const EnquiryForm = () => {

    const [sourceText, setSourceText] = useState('');
    const [destinationText, setDestinationText] = useState('');

    const handleSourceChange = (e) => {
        setSourceText(e.target.value);   
    }

    const handleDestinationChange = (e) => {
        setDestinationText(e.target.value)
    }

    const handleSubmit = () => {
        console.log(sourceText, destinationText)
    }

    const handleBookCab = () => {
        alert('Cab has been booked.')
    }

    const headerStyle ={textAlign: 'center',
    padding: '3px',
    marginBottom: '10px',
    backgroundColor: 'DarkSalmon',
    color: 'white'}

    return (
        <>
        <header style={headerStyle}><h4>Zazu Pet Taxi Services</h4></header>
        <form onSubmit={handleSubmit}>
            <label htmlFor={'source'}>Source</label>
            <input name={'source'} value={sourceText} onChange={handleSourceChange} id={'source'}  />
            <br/>

            <label htmlFor={'destination'}>Destination</label>
            <input name={'destination'} value={destinationText} onChange={handleDestinationChange} id={'destination'}  />
            <br/>
            <input type={'checkbox'}/> <label>Round Trip</label>
            <br/>

            <button type={'submit'}>Calculate Fare</button>
        </form>
        <div>
            <div>Total kms: 20</div>
            <div>Expected Fare: Rs.600</div>
        </div>
        <div>
            <button type={'button'} onClick={handleBookCab}>Book Cab</button>
        </div>
        <br/> <br/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17932.457059653974!2d77.64844010460857!3d12.845823323820174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b23e417c1f3%3A0x2f2b23b128e77c50!2sZazu%20Pet%20Taxi%20Service!5e0!3m2!1sen!2sin!4v1674235599265!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <footer style={{...headerStyle, marginTop: '20px'}}>
            <p>
                <a href="mailto:hege@example.com">zazupetservices@gmail.com</a>
            </p>
        </footer>
        </>
    )
};

export default EnquiryForm;