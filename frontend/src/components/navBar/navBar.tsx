import React from 'react';

function NavBar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Clientes</a>
        </li>
        <li>
          <a href="/dependentes" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Dependentes</a>
        </li>
        <li>
          <a href="/acomodacoes" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Acomodações</a>
        </li>
        <li>
          <a href="/hospedagens" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>Hospedagens</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
