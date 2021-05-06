/*
 * @Author: 汤波
 * @Date: 2020-10-14 16:31:14
 * @Description:
 * @LastEditors: 罗恒
 * @LastEditTime: 2021-04-28 15:03:27
 * @FilePath: \csxt-ui-system\src\utils\ant.ts
 */
import { App } from "vue";
import {
  Empty,
  Spin,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  Modal,
  Row,
  Table,
  Radio,
  Checkbox,
  Tree,
  Transfer,
  Select,
  Tabs,
  ConfigProvider,
  Upload,
  DatePicker,
  Switch,
  Dropdown,
  Carousel
} from "ant-design-vue";

const ant = {
  install(Vue: App) {
    Vue.component(ConfigProvider.name, ConfigProvider);
    Vue.component(Empty.displayName, Empty);
    Vue.component(Spin.name, Spin);
    Vue.component(Button.name, Button);
    Vue.component(Col.name, Col);
    Vue.component(Divider.name, Divider);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Input.name, Input);
    Vue.component(Input.Search.name, Input.Search);
    Vue.component(Input.TextArea.name, Input.TextArea);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Checkbox.Group.name, Checkbox.Group);
    Vue.component(Tree.name, Tree);
    Vue.component(Layout.name, Layout);
    Vue.component(Layout.Sider.name, Layout.Sider);
    Vue.component(Layout.Header.name, Layout.Header);
    Vue.component(Layout.Content.name, Layout.Content);
    Vue.component(Menu.name, Menu);
    Vue.component(Menu.Item.name, Menu.Item);
    Vue.component(Menu.SubMenu.name, Menu.SubMenu);
    Vue.component(Modal.name, Modal);
    Vue.component(Row.name, Row);
    Vue.component(Table.name, Table);
    Vue.component(Radio.Group.name, Radio.Group);
    Vue.component(Radio.Button.name, Radio.Button);
    Vue.component(Transfer.name, Transfer);
    Vue.component(Select.name, Select);
    Vue.component(Select.Option.name, Select.Option);
    Vue.component(Tabs.name, Tabs);
    Vue.component(Tabs.TabPane.name, Tabs.TabPane);
    Vue.component(Upload.name, Upload);
    Vue.component(DatePicker.name, DatePicker);
    Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
    Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker);
    Vue.component(Switch.name, Switch);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(Dropdown.Button.name, Dropdown.Button);
    Vue.component(Carousel.name, Carousel);
  }
};

export default ant;
