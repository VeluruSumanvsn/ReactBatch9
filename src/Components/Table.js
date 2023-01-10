import React from 'react'

function Table(){
    return(
        <div className="nav">
            <table className="table">
                <thead> 
                <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Designation</th>
                        <th>Domain</th>
                    </tr>	
                </thead>
                    <tbody>
                        <tr>
                            <td>Kirshna</td>
                            <td>TCS</td>
                            <td>0000</td>
                            <td>TA</td>
                            <td>Testing</td>
                        </tr>	
                        <tr>
                            <td>Suman</td>
                            <td>Sony</td>
                            <td>0001</td>
                            <td>TL</td>
                            <td>React</td>
                        </tr>	
                        <tr>
                            <td>Sai</td>
                            <td>Infy</td>
                            <td>0001</td>
                            <td>TL</td>
                            <td>AWS</td>
                        </tr>
                    </tbody>
            </table>						
        </div>
    )
}
export default Table;