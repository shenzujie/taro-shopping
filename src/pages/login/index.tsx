
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Taro, { Component, Config } from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Ajax from '@static/js/Ajax/http.js'
import './index.scss'
import {USERINFO} from '../../store/actionType'
@connect(({ user }) => ({
  user
}), (dispatch) => ({
  login (e) {
    dispatch({type:USERINFO,data:e})
  }
}))
export default class Login extends Component<any,any>{
  constructor () {
    super(...arguments)
    this.state = {
      username:'',
      password:''
    }
  }
  config: Config = {
    navigationBarTitleText: '用户登录'
  }
  onSubmit(){
    this.props.login({username:this.state.username,password:this.state.password})
    Ajax.post('http://localhost:5050/api/3848',{data:2223})
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  handleChange(key,value){
    this.setState({
      [key]:value
    })

  }
  render(){
    const {username,password} =this.state
    return(
      <AtForm className='loginPage'
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput 
          name='value' 
          title='用户名' 
          type='text' 
          placeholder='请输入用户名' 
          value={username} 
          onChange={this.handleChange.bind(this, 'username')} 
        />
        <AtInput 
          name='value' 
          title='密码' 
          type='password' 
          placeholder='请输入密码' 
          value={password} 
          onChange={this.handleChange.bind(this, 'password')} 
        />
        <View>
          <AtButton type='primary' formType='submit' className='loginBtn' >登录</AtButton>
        </View>
      </AtForm>
    )
  }
}