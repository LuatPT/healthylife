import React from 'react'
import CaculatorForm from './CaculatorForm'
class Caculator extends React.Component {
    render(){
        return (
            <div className="caculatorDiv">
                {/* <img src="https://file.hstatic.net/1000185761/file/cong-thuc-tinh-bmi_grande.jpg" alt="BMI"/> */}
                <CaculatorForm />
                <div>
                    <p>BMR của bạn là: 2250</p>
                    <p>TDEE của bạn là: 3900</p>
                </div>
            </div>
        )
    }
}
export default Caculator;