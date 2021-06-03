import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={[location.pathname]}
        defaultSelectedKeys={["/admin/users"]}
      >
        <Menu.Item key="/admin/princ">
          <Link to="/admin/princ">
            <Icon type="laptop" />
            <span className="nav-text">Panel Principal</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to="/admin/users">
            <Icon type="user" />
            <span className="nac-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/patients">
          <Link to="/admin/patients">
            <Icon type="robot" />
            <span className="nac-text">Pacientes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <Link to="/admin/menu">
            <Icon type="star" />
            <span className="nac-text">Beneficios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/courses">
          <Link to="/admin/courses">
            <Icon type="book" />
            <span className="nac-text">Estudios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/blog">
          <Link to="/admin/blog">
            <Icon type="message" />
            <span className="nac-text">Reportes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/setup">
          <Link to="/admin/setup">
            <Icon type="tool" />
            <span className="nac-text">Configuración</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
