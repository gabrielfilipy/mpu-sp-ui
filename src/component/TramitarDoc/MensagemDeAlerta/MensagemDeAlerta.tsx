import React from "react"
import Swal from "sweetalert2"




function MensagemDeAlerta() {
  Swal.fire({
    title: 'Tem certeza que deseja tramitar o documento?',
    text: "Você não será capaz de reverter isso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim!',
    cancelButtonText: 'Cancelar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Tramitado!',
        'Seu arquivo foi tramitado.',
        'success'
      )
    }
  })
}

export default MensagemDeAlerta
