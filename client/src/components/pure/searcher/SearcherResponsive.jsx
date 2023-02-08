import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ResponsiveSearcher = styled.div`
display: none;
@media (max-width: 768px) {
    display: flex;
    padding: 5px 0 5px 10vw;
    width: 100vw;
}
`
export default function SearcherResponsive() {
    return(
        <div>
             <ResponsiveSearcher>
                <DropdownButton title="Filtros" id="bg-nested-dropdown" variant="light">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Ir</Button>
                </Form>
             </ResponsiveSearcher>
        </div>
       
    )
}