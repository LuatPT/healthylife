import React from 'react'
class CaculatorForm extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     name: "",
        //     age:"",
        //     gender: "",
        //     heigh: "",
        //     weight: "",
        //     volumeTrainer: "",
        //     target: ""
        // }
    }
    render(){
        return (
            <div className="caculatorForm">
               <form action="index.html" method="post">
                <h2>Nhập thông tin của bạn:</h2><br/>
                <fieldset>
                    <legend><span class="number">1</span> Thông tin cơ bản</legend>
                    <label for="name">Tên:</label>
                    <input type="text" id="name" name="name" placeholder="Nhập tên của bạn..." />

                    <label for="age">Tuổi:</label>
                    <input type="number" id="age" name="age" placeholder="Nhập số tuổi của bạn..."/>

                    <label>Giới tính:</label>
                    <input type="radio" id="male" value="male" name="gender"/><label for="male" class="light">Nam</label><br/>
                    <input type="radio" id="female" value="female" name="gender"/><label for="female" class="light">Nữ</label>
                    
                    <label for="height">Chiều cao:</label>
                    <input type="number" id="height" name="height" placeholder="Nhập chiều cao của bạn..."/>
                    
                    <label for="weight">Cân nặng:</label>
                    <input type="number" id="weight" name="weight" placeholder="Nhập cân nặng của bạn..."/>

                </fieldset>

                <fieldset>
                    <legend><span class="number">2</span> Thông tin tập luyện</legend>
                    <label for="volumeTrainer">Chế độ tập luyện</label>
                    <select id="volumeTrainer" name="volumeTrainer">
                                <optgroup label="Newbie">
                                    <option value="frontend_developer">1-3 buổi/tuần</option>
                                </optgroup>
                                <optgroup label="Normal">
                                    <option value="android_developer">3-5 buổi/tuần</option>
                                </optgroup>
                                <optgroup label="Pro">
                                    <option value="business_owner">Trên 6 buổi/tuần</option>
                                </optgroup>
                    </select>

                    <label>Mong muốn</label>
                    <input type="checkbox" id="decreaseWeight" value="decrease" name="target" />
                    <label class="light" for="decreaseWeight">Giảm cân</label><br/>
                    <input type="checkbox" id="keepWeight" value="keep" name="target"/>
                    <label class="light" for="keepWeight">Duy trì</label><br/>
                    <input type="checkbox" id="increaseWeight" value="increase" name="target"/>
                    <label class="light" for="increaseWeight">Tăng cân</label>
                </fieldset>
                <button type="submit">Tính Toán</button>
                </form>
            </div>
        )
    }
};
export default CaculatorForm;