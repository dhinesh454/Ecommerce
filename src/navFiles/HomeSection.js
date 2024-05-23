import { Button, Table } from "react-bootstrap";
import classes from './HomeSection.module.css'




const HomeSection = () => {

    return(

        <section className="m-3 p-2">
            <h1 className="text-center fst-italic">TOURS</h1>
            <Table className={`${classes.homesection} my-2 p-2 `}>
            <tbody>
                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>JUL16</td>
                    <td>DETROIT,MI</td>
                    <td>DTE ENERGY MUSIC THEATRE</td>
                    <Button>BUY TICKETS</Button>
                </tr>

                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>JUL19</td>
                    <td>TORONTO,ON</td>
                    <td>BUDWEISER STAGE</td>
                    <Button>BUY TICKETS</Button>
                </tr>

                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>JUL22</td>
                    <td>BRISTOW,VA</td>
                    <td>JIGGY LUBE LIVE</td>
                    <Button>BUY TICKETS</Button>
                </tr>


                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>JUL 29</td>
                    <td>PHOENIX,AZ</td>
                    <td>AK-CHIN PAVILION</td>
                    <Button>BUY TICKETS</Button>
                </tr>

                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>AUG 2</td>
                    <td>LAS VEGAS, NV</td>
                    <td>T-MOBILE ARENA</td>
                    <Button>BUY TICKETS</Button>
                </tr>


                <tr className="d-flex flex-start text-left justify-content-between p-2">
                    <td>AUG 7</td>
                    <td>CONCORD,CA</td>
                    <td>CONCORD PAVILON</td>
                    <Button>BUY TICKETS</Button>
                </tr>
            </tbody>

            </Table>
        </section>
    )

};

export default HomeSection;