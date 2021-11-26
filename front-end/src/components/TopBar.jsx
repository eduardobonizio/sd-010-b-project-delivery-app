import React from 'react';
import { Image, Navbar } from 'react-bootstrap';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router';
import LogoutButton from './LogoutButton';

function TopBar(props) {
  const { name } = props;
  const history = useHistory();
  const onSellerPage = history.location.pathname.includes('/seller');

  return (
    <Navbar variant="dark" className="navbar">
      <Navbar.Collapse className="justify-content-start">
        <Navbar.Brand className="logo">
          <Image
            src="/images/logo.svg"
            width="50"
            height="40"
            alt="Disk Birita logo"
          />
        </Navbar.Brand>
        <a href={ onSellerPage ? '/seller/orders' : '/customer/products' }>
          <Navbar.Text
            variant="light"
            className="products align-items-center"
            data-testid={ `customer_products__element-navbar-link-${
              onSellerPage ? 'orders' : 'products'
            }` }
            href="/customer/products"
          >
            { onSellerPage ? 'ORDERS' : 'PRODUTOS' }
          </Navbar.Text>
        </a>
        {
          !onSellerPage
          && (
            <a href="/customer/orders">
              <Navbar.Text
                className="orders align-items-center"
                data-testid="customer_products__element-navbar-link-orders"
                href="/customer/orders"
              >
                MEUS PEDIDOS
              </Navbar.Text>
            </a>
          )
        }
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            className="name align-items-center"
            data-testid="customer_products__element-navbar-user-full-name"
            href="/customer/orders"
          >
            { name }
          </Navbar.Text>
          <Navbar.Text
            className="exit align-items-center"
            data-testid="customer_products__element-navbar-link-logout"
            href="/customer/orders"
          >
            <LogoutButton />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}

TopBar.propTypes = {
  name: Proptypes.string.isRequired,
};

export default TopBar;

// import React from 'react';
// import { Image, Navbar } from 'react-bootstrap';
// import Proptypes from 'prop-types';
// import { useHistory } from 'react-router';
// import LogoutButton from './LogoutButton';

// function TopBar(props) {
//   const { name } = props;
//   const history = useHistory();
//   const onSellerPage = history.location.pathname.includes('/seller');

//   return (
//     <Navbar variant="dark" className="navbar">
//       <Navbar.Collapse className="justify-content-start">
//         <Navbar.Brand className="logo">
//           <Image
//             src="/images/logo.svg"
//             width="50"
//             height="40"
//             alt="Disk Birita logo"
//           />
//         </Navbar.Brand>
//         <a href="/customer/products">
//           <Navbar.Text
//             variant="light"
//             className="products align-items-center"
//             data-testid="customer_products__element-navbar-link-products"
//             href="/customer/products"
//           >
//             PRODUTOS
//           </Navbar.Text>
//         </a>
//         {!onSellerPage
//         && (
//           <a href="/customer/orders">
//             <Navbar.Text
//               className="orders align-items-center"
//               data-testid="customer_products__element-navbar-link-orders"
//               href="/customer/orders"
//             >
//               MEUS PEDIDOS
//             </Navbar.Text>
//           </a>)}
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text
//             className="name align-items-center"
//             data-testid="customer_products__element-navbar-user-full-name"
//             href="/customer/orders"
//           >
//             { name }
//           </Navbar.Text>
//           <Navbar.Text
//             className="exit align-items-center"
//             data-testid="customer_products__element-navbar-link-logout"
//             href="/customer/orders"
//           >
//             <LogoutButton />
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// TopBar.propTypes = {
//   name: Proptypes.string.isRequired,
// };

// export default TopBar;