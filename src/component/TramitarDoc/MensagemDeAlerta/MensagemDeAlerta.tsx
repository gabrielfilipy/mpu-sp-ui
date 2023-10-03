import React from "react"
import Swal from "sweetalert2"




function MensagemDeAlerta() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: 'Tem certeza que deseja tramitar o documento?',
    text: "Você não poderá desfazer essa ação!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim!',
    cancelButtonText: 'NÃO!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Tramitado!',
        'Você Tramitou Com Sucesso.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Seu arquivo ta seguro :)',
        'error'
      )
    }
  })
}

export default MensagemDeAlerta
