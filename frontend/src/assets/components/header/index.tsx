import logo from '../../img/logo.svg'
import './styles.css'




function Header() {
    return (

        <header>


            <div className="meta-logotipo-container">
                <img src={logo} alt=""/>
                    <h1> DSMeta </h1>
                    <p>Desenvolvido Por Loucos </p>
            </div>




        </header>


    )


}export default Header