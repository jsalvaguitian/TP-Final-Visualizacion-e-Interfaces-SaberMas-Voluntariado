function registrarDonacion() {
            const destinatario = document.getElementById('destinatario').value;
            const monto = document.getElementById('monto').value;
            const medio = document.getElementById('medio').value;
            const detalle = document.getElementById('detalle').value || 'Sin detalle';
            const fecha = new Date().toLocaleDateString();

            const fila = `
                <tr>
                    <td>${fecha}</td>
                    <td>${destinatario}</td>
                    <td>$${monto}</td>
                    <td>${medio}</td>
                    <td>${detalle}</td>
                </tr>
            `;

            document.querySelector('#tablaDonaciones tbody').insertAdjacentHTML('afterbegin', fila);

            document.getElementById('formDonacion').classList.add('d-none');
            document.querySelector('#formDonacion form').reset();
        }