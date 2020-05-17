import React from "react";
import style from "../Car/CarContainer.module.css";
import Car from "./Car";

class CarContainer extends React.Component {
    state = {
        cars: [
            {
                name: "Mazda",
                year: 2015,
                showInput : false,
            },
            {
                name: "Opel",
                year: 2012,
                showInput : false,
            },
            {
                name: "Honda",
                year: 2010,
                showInput : false,
            }
        ],
        showCars:false,
        showClsName:false,

    };


    onChangeName=(index, name)=>{
        const cars=[...this.state.cars];
        cars[index].name = name;
        this.setState({cars: cars})
    };
    deleteHandler=(index)=>{
        const cars=[...this.state.cars];
        cars.splice(index, 1);
        this.setState({cars})
    };

    showCarsInput = (index) => {
        const cars=[...this.state.cars];
        cars[index].showInput = !cars[index].showInput ;
        this.setState({cars});
    };

    showCars = () => {
        this.setState({showClsName:!this.state.showClsName});

            if(this.state.showCars) {
                let timeout = setTimeout(() => {
                    this.setState({showCars: !this.state.showCars});
                    clearTimeout(timeout)
                }, 1000)
            }else{
                this.setState({showCars: !this.state.showCars})
            }
    };


    render() {
        return (
            <div>
                <h1>Cars</h1>
                <button className={style.Button}  onClick={this.showCars}>Show Cars</button>
                <div className={this.state.showClsName? style.cars +" "+ style.carsOn: style.cars}>
                    {/*{`cars ${this.state.showClsName?" carsOn": ""}`}>*/}
                    {this.state.showCars && this.state.cars.map((car, index)=>{
                            return(
                                <Car key={index} name={car.name} year={car.year}
                                     showInput={car.showInput}
                                     onChangeName={(e)=>{this.onChangeName(index, e.target.value)}}
                                     onDelete={()=>{this.deleteHandler(index)}}
                                     showCarsInput={()=>{this.showCarsInput(index)}}
                                />
                            )})
                    }
                </div>
            </div>
        )
    }
}

export default CarContainer;