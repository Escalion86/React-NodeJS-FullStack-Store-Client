import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { Context } from '../index'
import { NavLink, useHistory } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { LOGIN_ROUTE, ADMIN_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.isAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          {user.isAuth ? (
            <>
              <Button
                variant={'outline-light'}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
              <Button
                variant={'outline-light'}
                className="ml-2"
                onClick={() => logOut()}
                // onClick={() => user.setIsAuth(false)}
              >
                Выйти
              </Button>
            </>
          ) : (
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
})

export default NavBar
