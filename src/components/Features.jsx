import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img src={featureimage} alt="feature-image"/>
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Application <span>Software</span> is Art</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit modi, provident repudiandae quisquam molestiae quis, laboriosam natus cumque illum ea suscipit consectetur illo dignissimos cum nisi deleniti saepe nobis rerum voluptas sapiente iste aut. Vel quaerat aliquam voluptas ipsum.</p>
                <button>View More Features</button>
            </div>
        </div>
    )
}

export default Features;