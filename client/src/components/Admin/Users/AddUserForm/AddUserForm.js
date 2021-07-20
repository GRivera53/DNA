import React, { useState, useEffect } from "react";
import {
  Form,
  Icon,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
  DatePicker,
} from "antd";
import { signUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import "./AddUserForm.scss";
import moment from "moment";
export default function EditUserForm(props) {
  const { setIsVisibleModal, setReloadUsers, post } = props;
  const [userData, setUserData, postData, setPostData] = useState({});
  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);
  const addUser = (event) => {
    event.preventDefault();

    if (
      !userData.name ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password ||
      !userData.repeatPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else if (userData.password !== userData.repeatPassword) {
      notification["error"]({
        message: "Las contraseñas tienen que ser iguale.",
      });
    } else {
      const accesToken = getAccessTokenApi();

      signUpAdminApi(accesToken, userData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
          setUserData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };

  return (
    <div className="form-add">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
        post={post}
        postData={postData}
        setPostData={setPostData}
      />
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser, postData, setPostData } = props;
  //const [postData, setPostData] = useState({});
  const { Option } = Select;
  /*useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);*/
  return (
    <Form className="form-add" onSubmit={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="user" />}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="code" />}
              placeholder="Código"
              value={userData.codigo}
              onChange={(e) =>
                setUserData({ ...userData, codigo: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="phone" />}
              placeholder="Phone"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            value={postData.date && moment(postData.date)}
            onChange={(e, value) =>
              setPostData({
                ...postData,
                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString(),
              })
            }
          />
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="home" />}
              placeholder="Sucursal"
              value={userData.sucursal}
              onChange={(e) =>
                setUserData({ ...userData, sucursal: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="mail" />}
              placeholder="Correlo electronico"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecióna un rol"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="editor">Editor</Option>
              <Option value="reviwer">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Repetir contraseña"
              value={userData.repeatPassword}
              onChange={(e) =>
                setUserData({ ...userData, repeatPassword: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
