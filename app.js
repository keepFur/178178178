'use strict';
Vue.config.devtools = true;
/* no check */
new Vue({
  el: '#app',
  data: function() {
    // 校验注册的时候两次密码是否一致， 此处必须要使用箭头函数，不然的话，this不会指向当前的vue实例
    var confirmPasswordValidator = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致'));
      } else {
        callback();
      }
    };
    return {
      // 当前时间
      nowDate: new Date(),
      // 登录
      dialogLoginVisible: false,
      // 注册
      dialogRegisterVisible: false,
      // 关于
      dialogAboutVisible: false,
      // 帮助
      dialogHelpVisible: false,
      // 更多公共
      dialogMoreNoticeVisible: false,
      // 登录表单
      loginForm: {
        username: '',
        password: ''
      },
      // 注册表单
      registerForm: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      // 登录表单校验规则
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ]
      },
      // 注册表单校验规则
      registerFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 5,
            max: 20,
            message: '长度在 5 到 20 个字符',
            trigger: 'blur'
          },
          {
            validator: confirmPasswordValidator
          }
        ]
      },
      // 淘宝的空包类型
      tbKBSelceted: 0,
      tbKB: [
        {
          id: 0,
          type: 'lbkd',
          name: '龙邦快递「淘宝、天猫专用」',
          price: {
            ptvip: 1.8,
            vip: 1.7,
            jpvip: 1.6
          }
        },
        {
          id: 1,
          type: 'bskd',
          name: '百世快递「淘宝、天猫专用」',
          price: {
            ptvip: 2.2,
            vip: 2.1,
            jpvip: 2.0
          }
        },
        {
          id: 2,
          type: 'ytkd',
          name: '圆通快递「淘宝、天猫专用」',
          price: {
            ptvip: 1.6,
            vip: 1.5,
            jpvip: 1.4
          }
        }
      ],
      // 京东空包类型
      jdKBSelceted: 0,
      jdKB: [
        {
          id: 0,
          type: 'lbkd',
          name: '龙邦快递「京东专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 1,
          type: 'stkd',
          name: '申通快递「京东专用」',
          price: {
            ptvip: 1.6,
            vip: 1.5,
            jpvip: 1.4
          }
        }
      ],
      // 拼多多空包类型
      pddKBSelceted: 0,
      pddKB: [
        {
          id: 0,
          type: 'gtkd',
          name: '国通快递「拼多多专用」',
          price: {
            ptvip: 1.0,
            vip: 0.9,
            jpvip: 0.8
          }
        },
        {
          id: 1,
          type: 'lbkd',
          name: '龙邦快递「拼多多专用」',
          price: {
            ptvip: 1.1,
            vip: 1.0,
            jpvip: 0.9
          }
        },
        {
          id: 2,
          type: 'stkd',
          name: '申通快递「拼多多专用」',
          price: {
            ptvip: 1.4,
            vip: 1.3,
            jpvip: 1.2
          }
        },
        {
          id: 3,
          type: 'bskd',
          name: '百世快递「拼多多专用」',
          price: {
            ptvip: 1.5,
            vip: 1.4,
            jpvip: 1.3
          }
        },
        {
          id: 4,
          type: 'yfkd',
          name: '亚风快递「拼多多专用」',
          price: {
            ptvip: 0.85,
            vip: 0.75,
            jpvip: 0.65
          }
        },
        {
          id: 5,
          type: 'kfwkd',
          name: '快服务快递「平多多专用」',
          price: {
            ptvip: 0.9,
            vip: 0.8,
            jpvip: 0.7
          }
        }
      ],
      // 宝贝任务
      bbTaskSelected: 0,
      bbTask: [
        {
          id: 0,
          name: 'PC搜索流量',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 1,
          name: 'PC直访商品',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 2,
          name: 'APP搜索流量',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 3,
          name: 'APP收藏商品',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 4,
          name: 'APP搜索收藏',
          price: {
            ptvip: 0.36,
            vip: 0.35,
            jpvip: 0.34
          }
        },
        {
          id: 5,
          name: 'APP直接加购',
          price: {
            ptvip: 0.33,
            vip: 0.32,
            jpvip: 0.31
          }
        },
        {
          id: 6,
          name: 'APP搜索加购',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 7,
          name: '直播关注',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        },
        {
          id: 8,
          name: '微淘点赞',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        },
        {
          id: 9,
          name: '直播观看人数',
          price: {
            ptvip: 0.02,
            vip: 0.02,
            jpvip: 0.02
          }
        }
      ],
      // 店铺任务
      dpTaskSelected: 0,
      dpTask: [
        {
          id: 0,
          name: 'PC直访店铺',
          price: {
            ptvip: 0.15,
            vip: 0.14,
            jpvip: 0.13
          }
        },
        {
          id: 1,
          name: 'APP店铺收藏',
          price: {
            ptvip: 0.17,
            vip: 0.16,
            jpvip: 0.15
          }
        }
      ],
      // 京东任务
      jdTaskSelected: 0,
      jdTask: [
        {
          id: 0,
          name: '京东流量',
          price: {
            ptvip: 0.2,
            vip: 0.19,
            jpvip: 0.18
          }
        },
        {
          id: 1,
          name: '京东商品收藏',
          price: {
            ptvip: 0.3,
            vip: 0.29,
            jpvip: 0.28
          }
        },
        {
          id: 2,
          name: '京东店铺关注',
          price: {
            ptvip: 0.16,
            vip: 0.15,
            jpvip: 0.14
          }
        },
        {
          id: 3,
          name: '京东加购',
          price: {
            ptvip: 0.31,
            vip: 0.3,
            jpvip: 0.29
          }
        }
      ],
      activeNames: '1'
    };
  },
  methods: {
    // 用户登录
    userLoginHandler: function() {
      this.dialogLoginVisible = true;
    },
    // 用户注册
    userRegisterHandler: function() {
      this.dialogRegisterVisible = true;
    },
    // 关于站点
    aboutSiteHandler: function() {
      this.dialogAboutVisible = true;
    },
    // 帮助
    helpHandler: function() {
      this.dialogHelpVisible = true;
    },
    // 保存到桌面
    saveDeskHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    },
    // 更多公告
    moreNoticeHandler: function() {
      this.dialogMoreNoticeVisible = true;
    },
    // 查看平台运营报告
    viewOperationReportHandler: function() {
      this.$message({
        message: '操作成功',
        type: 'success'
      });
    },
    // 立即下单
    buyHandler: function() {
      this.$message({
        message: '下单成功',
        type: 'success'
      });
    },
    // 会员中心
    vipCenterHandler: function() {
      this.$message({
        message: '跳转到会员中心',
        type: 'success'
      });
    },
    // 确认登录
    confirmLoginHandler: function() {
      var _this = this;
      this.$refs['loginFormEle'].validate(function(valid, fildes) {
        if (valid) {
          _this.$message({
            message: '登录成功',
            type: 'success'
          });
          _this.dialogLoginVisible = false;
        } else {
          return false;
        }
      });
    },
    // 确认注册
    confirmRegisterHandler: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          this.dialogRegisterVisible = false;
        } else {
          return false;
        }
      });
    }
  }
});
