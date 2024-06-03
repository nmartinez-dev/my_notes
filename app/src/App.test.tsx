import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const { getByTestId } = render(<App />);

const openAddModal = () => {
  const addButton = getByTestId('add_card_button');
  expect(addButton).toBeInTheDocument();
  fireEvent.click(addButton);
};

const isModalOpen = (
  modal: any,
  titleInput: any,
  descriptionInput: any,
  cancelButton: any,
  saveButton: any
) => {
  expect(modal).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
};

const isModalClosed = async (
  modal: any,
  titleInput: any,
  descriptionInput: any,
  cancelButton: any,
  saveButton: any
) => {
  await waitFor(() => expect(modal).not.toBeInTheDocument());
  expect(titleInput).not.toBeInTheDocument();
  expect(descriptionInput).not.toBeInTheDocument();
  expect(cancelButton).not.toBeInTheDocument();
  expect(saveButton).not.toBeInTheDocument();
};

const setInputValue = (input: any, value: string) => {
  fireEvent.change(input, { target: { value: value } });
  expect(input.value).toBe(value);
};

test('add_new_note', () => {
  openAddModal();

  const modal = getByTestId('modal_form');
  const titleInput = getByTestId('title');
  const descriptionInput = getByTestId('description');
  const cancelButton = getByTestId('cancel_button');
  const saveButton = getByTestId('save_button');

  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);

  setInputValue(titleInput, 'Nota de prueba');
  setInputValue(descriptionInput, 'Testeando nota de prueba!');

  fireEvent.click(saveButton);

  isModalClosed(modal, titleInput, descriptionInput, cancelButton, saveButton);
});

test('open_close_add_modal', () => {
  const { getByTestId } = render(<App />);

  openAddModal();

  const modal = getByTestId('modal_form');
  const titleInput = getByTestId('title');
  const descriptionInput = getByTestId('description');
  const cancelButton = getByTestId('cancel_button');
  const saveButton = getByTestId('save_button');

  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);

  fireEvent.click(cancelButton);

  isModalClosed(modal, titleInput, descriptionInput, cancelButton, saveButton);
});

test('validate_fields', () => {
  const { getByTestId } = render(<App />);

  openAddModal();

  const modal = getByTestId('modal_form');
  const titleInput = getByTestId('title');
  const descriptionInput = getByTestId('description');
  const cancelButton = getByTestId('cancel_button');
  const saveButton = getByTestId('save_button');

  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);

  setInputValue(descriptionInput, 'Valor válido.');
  setInputValue(titleInput, 'Valido que no posea más de 25 caracteres.');
  fireEvent.click(saveButton);
  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);
  setInputValue(titleInput, '');
  fireEvent.click(saveButton);
  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);

  setInputValue(titleInput, 'Valor válido.');
  setInputValue(
    descriptionInput,
    'Almacén: comprar leche, pan, huevos, queso, jamón, manteca, yogur, cereal, arroz, pasta, salsa, aceite, pollo, carne, pescado, zanahorias, papas, lechuga, tomates, cebollas, ajos, frutas, jugo, café, té, galletitas, azúcar, sal, vinagre, aceitunas, y limones.'
  );
  fireEvent.click(saveButton);
  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);
  setInputValue(descriptionInput, '');
  fireEvent.click(saveButton);
  isModalOpen(modal, titleInput, descriptionInput, cancelButton, saveButton);
});
