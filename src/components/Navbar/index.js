import React from "react"
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from "gatsby"
import Logo from '@assets/logo.svg'
import './style.scss'

const links = [
  { name: 'Services', link: '/services'},
  { name: 'About', link: '/about'}
]

const linkItems = () => {
  return links.map(e => {
    return (
      <HeaderMenuItem element={Link} to={e.link}>
                {e.name}
      </HeaderMenuItem>
    )
  })
}

const Navbar = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="WireCat">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="">
          <Logo class="logo" />
        </HeaderName>
        <HeaderNavigation aria-label="Navigator">
            {linkItems()}
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              {linkItems()}
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <Link to="https://billing.wirecat.net">
            <HeaderGlobalAction aria-label="Client Area">
              <UserAvatar20 class="custom-color"/>
            </HeaderGlobalAction>
          </Link>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default Navbar;