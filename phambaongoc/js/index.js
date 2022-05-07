document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var tableTag = document.querySelector('#product-table');
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                tableTag.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.gender}</td>
                <td>${element.email}</td>
                <td>${element.phonenumber}</td>
                <td>${element.birthday}</td>
                <td>${element.address}</td>
                                            <td>
                                                <a href="form.html?id=${element.id}"><i class="fa fa-pencil-square-o"></i></a>
                                                <a href="detail.html?id=${element.id}"><i class="fa fa-info-circle"></i></a>
                                                <a href="javascript:void(0)"><i class="fa fa-trash" onclick="deleteProduct(${element.id})"></i></a>
                                            </td>
                                        </tr>`;
            }
        }
    };
    xhr.open('GET', 'http://localhost:8080/api/v1/students', false);
    xhr.send();
})

function deleteProduct(id) {

    if (id === undefined || id === null) {
        return;
    }
    if (confirm('Are you sure?')) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert('Success');
                window.location.href = 'index.html';
            }
        };
        xhr.open('DELETE', 'http://localhost:8080/api/v1/students/' + id, false);
        xhr.send();
    }
}