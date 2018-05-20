import React from 'react';
import TextField from 'material-ui/TextField';

const style = {
  width: '50%',
  height: 90,
  margin: 'auto',
  display: 'block',
  'fontSize': '25px'
};

const floatingLabelStyle = {
    'textAlign': 'center'
};


const SearchAddress = ({addNewAddress}) => (
    <TextField 
        style={style} 
        floatingLabelText="Novo Atendimento"
        hintText="Digite o Endereço"
        onKeyPress={addNewAddress}
        floatingLabelStyle={floatingLabelStyle}
    />
)

export default SearchAddress
