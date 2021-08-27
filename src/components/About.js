import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
      <h4>Version 1.0.0</h4>
        <h3>Calorie Manager - Solution to your Extras!</h3>
        <h5>A healthy lifestyle includes good nutrition and adequate physical activity. If your body weight has not changed for several months, the calories you consume from food and the calories you burn from physical activity are balanced. If you need to gain or lose weight, consider changing your dietary pattern and physical activity level to achieve your goal.</h5>

        <Link to='/home'>Go Back</Link>
    </div>
  )
}

export default About
