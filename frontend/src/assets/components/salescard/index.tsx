import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Notificationbutton from '../notificationicon'
import './styles.css'

function Salescard() {
    return (

        <div className="dsmeta-card">
            <h2 className="dsmeta-title">Vendas</h2>
            <div>
                <div className="dsmeta-formcontrol-container"><DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                /></div>
                <div className="dsmeta-formcontrol-container"><DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                /></div>


            </div>
            <div className="tabelatemp">
                <table className="dsmeta-table">
                    <thead>
                        <tr>

                            <th className="show900">Id</th>
                            <th>Vendedor</th>
                            <th className="show900">Visitas</th>
                            <th className="show900">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                            <th className="show576">Data</th>

                        </tr>

                    </thead>
                    <tbody>
                        <tr>

                            <th className="show900">#341</th>
                            <th className="show576">28/06/2022</th>
                            <th>Anakin</th>
                            <th className="show900">15</th>
                            <th className="show900">11</th>
                            <th>R$ 55300.00</th>
                            <th>
                                <div className="dsmeta-redbtncontainer">
                                    <Notificationbutton />

                                </div>


                            </th>

                        </tr>
                        <tr>
                            <th className="show900">#341</th>
                            <th className="show576">28/06/2022</th>
                            <th>Anakin</th>
                            <th className="show900">15</th>
                            <th className="show900">11</th>
                            <th>R$ 55300.00</th>
                            <th><div className="dsmeta-redbtncontainer">
                                <Notificationbutton />

                            </div>
                            </th>

                        </tr>
                        <tr>
                            <th className="show900">#341</th>
                            <th className="show576">28/06/2022</th>
                            <th>Anakin</th>
                            <th className="show900">15</th>
                            <th className="show900">11</th>
                            <th>R$ 55300.00</th>
                            <th><div className="dsmeta-redbtncontainer">
                                <Notificationbutton />
                            </div>
                            </th>

                        </tr>






                    </tbody>



                </table>
            </div>






        </div>


    )


}

export default Salescard
