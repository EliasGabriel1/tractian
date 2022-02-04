import React from 'react';
import GroupInput from "../GroupInput";
import Button2 from "../Button2";
import {FormFooter,Form,Text1,Text2} from "./styled"

function index(props) {
  return (
    <FormFooter>
      <Text1>Melhore os seus processos de manutenção</Text1>
      <Text2>Preencha o formulário para uma demonstração.</Text2>
      <Form>
        <GroupInput type="text" input="Nome" placeholder="Digite seu nome"/>
        <GroupInput type="text" input="Cargo" placeholder="Digite seu cargo"/>
        <GroupInput type="text" input="E-mail" placeholder="Digite seu e-mail"/>
        <Button2 text="Enviar"/>
      </Form>
    </FormFooter>
  );
}

export default index;