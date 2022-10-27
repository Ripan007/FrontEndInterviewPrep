// Create an 8 * 8 chessboard UI using html, css and js.Each box size will be 20px * 20px.Write modular code so that it is easier to extend.Modular means reusable and less of repetition

document.write("<table border='1' width='500' height='500'  align='center' style='max-width:100%;max-height:100%;'>")

for (var i = 0; i < 8; i++) {
    document.write("<tr>");
    for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 != 0) {
            document.write("<td bgcolor='white'</td>")
        } else {
            document.write("<td bgcolor='black'> </td>")
        }
    }
    document.write("</tr>")
}
document.write("</table>")

