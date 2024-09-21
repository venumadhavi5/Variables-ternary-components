import React from 'react'

function MarkSheet(props) {
    let telMarks = Number(props.telMarks);
    let hinMarks =Number(props.hinMarks);
    let engMarks =Number(props.engMarks);
    let mathMarks =Number(props.mathMarks);
    let scieMarks =Number(props.scieMarks);
    let socMarks =Number(props.socMarks);

    let totalMarks =telMarks+hinMarks+engMarks+mathMarks+scieMarks+socMarks;
    let perc =(totalMarks/600*100)

  return (
    <div>
        <table>
            <caption><strong>{props.StudentName} MarkSheet</strong></caption>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Max.Marks</th>
                    <th>Min.Marks</th>
                    <th>Result</th>
                    <th>Remark</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Telugu</td>
                    <td>100</td>
                    <td>{telMarks}</td>
                    <td>{telMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{telMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
                <tr>
                    <td>Hindi</td>
                    <td>100</td>
                    <td>{hinMarks}</td>
                    <td>{hinMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{hinMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>{engMarks}</td>
                    <td>{engMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{engMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td>100</td>
                    <td>{mathMarks}</td>
                    <td>{mathMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{mathMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>100</td>
                    <td>{scieMarks}</td>
                    <td>{scieMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{scieMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
                <tr>
                    <td>Social</td>
                    <td>100</td>
                    <td>{socMarks}</td>
                    <td>{socMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td>{socMarks >= 35 ? "Excellent" : "Poor"}</td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                    <td>Total</td>
                    <td>600</td>
                    <td>{totalMarks}({perc.toFixed(2)}%)</td>
                    <td>Pass</td>
                    <td>Excellent</td>
                </tr>
            </tfoot>
        </table>
      
    </div>
  )
}

export default MarkSheet
