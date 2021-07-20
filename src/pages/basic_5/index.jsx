import React from "react"

function ChidrenComponent() {
  return <div>child Component</div>
}

class PropsComponent extends React.Component {
  componentDidMount() {
    console.log('_this', this);
  }
  render() {
    const { children, mes, renderName, say, Component } = this.props
    const renderFunction = children[0]
    const renderComponent = children[1]
    return <div>
      {renderFunction()}
      {mes}
      {renderName()}
      {renderComponent}
      <Component />
      <button onClick={() => say()} > change content </button>
    </div>
  }
}

function Children(props) {
  return (
    <div>
      <div>hello  my name is {props.name}</div>
      <div>{props.msg}</div>
    </div>
  )
}

function Container(props) {
  const ContainerProps = {
    name: 'xxx',
    msg: 'let us learn react'
  }
  return props.children.map((item, idx) => {
    if (React.isValidElement(item)) {
      return React.cloneElement(item, { ...ContainerProps }, item.props.children)
    } else if (typeof item === 'function') {
      return item(ContainerProps)
    } else return null
  })
}

// form 案例
class Form extends React.Component {
  state = {
    formData: {}
  }

  submitFormData = (cb) => {
    cb({ ...this.state.formData })
  }

  resetForm = () => {
    const { formData } = this.state
    Object.keys(formData).forEach(item => {
      formData[item] = ''
    })
    this.setState({
      formData
    })
  }

  setValue = (name, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  render() {
    const { children } = this.props
    const renderChildren = []
    React.Children.forEach(children, (child) => {
      if (child.type.displayName === 'formItem') {
        const { name } = child.props
        const Children = React.cloneElement(child, {
          key: name,
          handleChange: this.setValue,
          value: this.state.formData[name] || ''
        }, child.props.children)
        renderChildren.push(Children)
      }
    })
    return renderChildren
  }
}

Form.displayName = 'form'

function FormItem(props) {
  const { children, name, handleChange, value, label } = props
  const onChange = (value) => {
    handleChange(name, value)
  }
  return <div className='form'>
    <span className='label'>{label} :</span>
    {
      React.isValidElement(children) && children.type.displayName === 'input'
        ? React.cloneElement(children, { onChange, value })
        : null
    }
  </div>
}

FormItem.displayName = 'formItem'

function Input({ onChange, value }) {
  return <input className='input' onChange={(e) => (onChange && onChange(e.target.value))} value={value} />
}

Input.displayName = 'input'

function FormDemo() {
  const form = React.useRef(null)
  const submit = () => {
    form.current.submitFormData(formData => {
      console.log(formData)
    })
  }

  const reset = () => [
    form.current.resetForm()
  ]

  return <div className='box'>
    <Form ref={form}>
      <FormItem name="name" label="I'am" >
        <Input />
      </FormItem>
      <FormItem name="msg" label="I say" >
        <Input />
      </FormItem>
      <input placeholder="不需要的input" />
      <Input />
    </Form>
    <div className='btns'>
      <button onClick={submit}>提交</button>
      <button onClick={reset}>重置</button>
    </div>
  </div>
}


class Basic_5 extends React.Component {
  state = {
    mes: "hello,React"
  }
  node = null
  say = () => this.setState({ mes: 'let us learn React!' })
  render() {
    return (
      <div>
        <PropsComponent
          mes={this.state.mes}  // ① props 作为一个渲染数据源
          say={this.say}     // ② props 作为一个回调函数 callback
          Component={ChidrenComponent} // ③ props 作为一个组件
          renderName={() => <div> my name is alien </div>} // ④ props 作为渲染函数
        >
          {() => <div>hello,world</div>} { /* ⑤render props */}
          <ChidrenComponent />             { /* ⑥render component */}
        </PropsComponent>

        <p>_________分割线_________</p>

        <Container>
          <Children key="1" />
          {(ContainerProps) => <Children key="2" {...ContainerProps} name={'x1x1x1'} />}
        </Container>

        <p>_________分割线_________</p>

        <FormDemo />
      </div>
    )
  }
}

export default Basic_5