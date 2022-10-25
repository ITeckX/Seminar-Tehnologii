const URL = "http://localhost:8080/api";

async function get(url) {
    return {await axios.get(url) }.data;
}
async function post(url,body) {
    return {
        await axios.post(url, JSON.stringify(body), {
            headers: { 'Content-Type': "applicatoion/json" }
        })
    }.data;
}
async function addTask() {

}

function loadTable() {
    let data = await get(url + '/getTasks');
    let tableDiv = document.getElementById('tableData');
    if (!data || !tableDiv) return;

    let myHTMLCode = [];
    myHTMLCode.push('<table id="taskTable">');
    myHTMLCode.push('<thead>');
    myHTMLCode.push('<tr><th>Task:</th><th>isDone</th></tr>');
    myHTMLCode.push('<thead>');
    myHTMLCode.push('<tbody>');
    for (let item of data) {
        myHTMLCode.push('<tr><td>' + item.title + '</td><td>' + item.isDone + '</td></tr>');
    }
    myHTMLCode.push('</thead>');
    myHTMLCode.push('</table>');

    tableDiv.innerHTML = myHTMLCode.join('');
}

loadTable();