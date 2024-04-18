import React from 'react'
import './AddService.css'
import {Modal,ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button} from '@chakra-ui/react';
import server from '../../../config/APIPath';
import APIInformation from '../../../config/APIInformation';

const AddServiceModal = ({isOpen,onClose}) => {
  // {
  //   "id": 0,
  //   "name": "string",
  //   "price": 0,
  //   "salePercent": 0,
  //   "description": "string",
  //   "image": "string"
  // }
  function saveService() {
    const service = {
      name: document.getElementById('name').value,
      price: document.getElementById('price').value,
      salePercent: document.getElementById('salePercent').value,
      description: document.getElementById('description').value,
      deleted: false,
      image: "heheh"
    };
    console.log(service);
    if(service.name === '' || service.price === '' || service.salePercent === '' || service.description === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    fetch(server+'/admin/service/create', { method: 'POST', headers: { 'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(APIInformation.username + ":" + APIInformation.password) }, body: JSON.stringify(service) })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      onClose();
    });}
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm dịch vụ mới</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="">
              <div className="form-group">
                <label htmlFor="name">Tên dịch vụ</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Giá</label>
                <input type="number" className="form-control" id="price" />
              </div>
              <div className="form-group">
                <label htmlFor="salePercent">Phần trăm giảm giá (vd: 10%)</label>
                <input type="number" className="form-control" id="salePercent" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Mô tả dịch vụ</label>
                <input type='text' className="form-control" id="description" />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
          
            <Button  colorScheme='blue' mr={3} onClick={saveService}>
              Lưu
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddServiceModal