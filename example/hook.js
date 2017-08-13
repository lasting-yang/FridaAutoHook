setImmediate(function () {
	Java.perform(function () {
		var TaoApiRequestClass = Java.use('android.taobao.apirequest.TaoApiRequest');
		TaoApiRequestClass._addParamTo.overload('java.lang.String', 'java.lang.String', 'java.util.HashMap').implementation = function (arg0, arg1, arg2) { 
			this._addParamTo(arg0, arg1, arg2); 
			console.log('TaoApiRequestClass._addParamTo [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass._addParamTo [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass._addParamTo [*] arg2: ' + arg2);
  		};
		TaoApiRequestClass.init.overload('android.content.Context').implementation = function (arg0) { 
			this.init(arg0); 
			console.log('TaoApiRequestClass.init [*] arg0: ' + arg0);
  		};
		TaoApiRequestClass.setISign.overload('android.taobao.common.i.ISign').implementation = function (arg0) { 
			this.setISign(arg0); 
			console.log('TaoApiRequestClass.setISign [*] arg0: ' + arg0);
  		};
		TaoApiRequestClass.addDataParam.overload('java.lang.String', 'java.lang.String').implementation = function (arg0, arg1) { 
			this.addDataParam(arg0, arg1); 
			console.log('TaoApiRequestClass.addDataParam [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.addDataParam [*] arg1: ' + arg1);
  		};
		TaoApiRequestClass.addDataParam.overload('java.util.Map').implementation = function (arg0) { 
			this.addDataParam(arg0); 
			console.log('TaoApiRequestClass.addDataParam [*] arg0: ' + arg0);
  		};
		TaoApiRequestClass.addDataParam.overload('[Ljava.lang.Object;').implementation = function (arg0) { 
			this.addDataParam(arg0); 
			console.log('TaoApiRequestClass.addDataParam [*] arg0: ' + arg0);
  		};
		TaoApiRequestClass.addParams.overload('[Ljava.lang.Object;').implementation = function (arg0) { 
			this.addParams(arg0); 
			console.log('TaoApiRequestClass.addParams [*] arg0: ' + arg0);
  		};
		TaoApiRequestClass.addSysParamBigPipe.overload('java.util.HashMap', 'long', 'boolean').implementation = function (arg0, arg1, arg2) { 
			this.addSysParamBigPipe(arg0, arg1, arg2); 
			console.log('TaoApiRequestClass.addSysParamBigPipe [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.addSysParamBigPipe [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.addSysParamBigPipe [*] arg2: ' + arg2);
  		};
		TaoApiRequestClass.doSign.overload('java.lang.String', 'java.util.HashMap').implementation = function (arg0, arg1) { 
			var ret = this.doSign(arg0, arg1); 
			console.log('TaoApiRequestClass.doSign [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.doSign [*] arg1: ' + arg1);
 			console.log('TaoApiRequestClass.doSign [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('java.lang.String').implementation = function (arg0) { 
			var ret = this.generalRequestUrl(arg0); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('java.lang.String', 'boolean').implementation = function (arg0, arg1) { 
			var ret = this.generalRequestUrl(arg0, arg1); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('java.lang.String', 'boolean', 'boolean', 'long').implementation = function (arg0, arg1, arg2, arg3) { 
			var ret = this.generalRequestUrl(arg0, arg1, arg2, arg3); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg2: ' + arg2);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg3: ' + arg3);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('java.lang.String', 'boolean', 'boolean', 'long', 'boolean').implementation = function (arg0, arg1, arg2, arg3, arg4) { 
			var ret = this.generalRequestUrl(arg0, arg1, arg2, arg3, arg4); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg2: ' + arg2);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg3: ' + arg3);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg4: ' + arg4);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('java.lang.String', 'boolean', 'boolean', 'long', 'boolean', 'java.lang.String').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5) { 
			var ret = this.generalRequestUrl(arg0, arg1, arg2, arg3, arg4, arg5); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg2: ' + arg2);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg3: ' + arg3);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg4: ' + arg4);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg5: ' + arg5);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('boolean', 'java.lang.String').implementation = function (arg0, arg1) { 
			var ret = this.generalRequestUrl(arg0, arg1); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('boolean', 'java.lang.String', 'boolean').implementation = function (arg0, arg1, arg2) { 
			var ret = this.generalRequestUrl(arg0, arg1, arg2); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg2: ' + arg2);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.generalRequestUrl.overload('boolean', 'java.lang.String', 'boolean', 'java.lang.String').implementation = function (arg0, arg1, arg2, arg3) { 
			var ret = this.generalRequestUrl(arg0, arg1, arg2, arg3); 
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg0: ' + arg0);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg1: ' + arg1);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg2: ' + arg2);
			console.log('TaoApiRequestClass.generalRequestUrl [*] arg3: ' + arg3);
 			console.log('TaoApiRequestClass.generalRequestUrl [*] ret: ' + ret);
 			return ret;
		};
		TaoApiRequestClass.processDataParam.overload().implementation = function () { 
			this.processDataParam(); 
  		};
		TaoApiRequestClass.resetParams.overload().implementation = function () { 
			this.resetParams(); 
  		};


		var TaoApiSignClass = Java.use('android.taobao.util.TaoApiSign');
		TaoApiSignClass.getSign.overload('java.util.Map').implementation = function (arg0) { 
			var ret = this.getSign(arg0); 
			console.log('TaoApiSignClass.getSign [*] arg0: ' + arg0);
 			console.log('TaoApiSignClass.getSign [*] ret: ' + ret);
 			return ret;
		};


		var bgmClass = Java.use('bgm');
		bgmClass.getSign.overload('java.util.AbstractMap').implementation = function (arg0) { 
			var ret = this.getSign(arg0); 
			console.log('bgmClass.getSign [*] arg0: ' + arg0);
 			console.log('bgmClass.getSign [*] ret: ' + ret);
 			return ret;
		};


		var bgnClass = Java.use('bgn');
		bgnClass.getSign.overload('java.util.AbstractMap').implementation = function (arg0) { 
			var ret = this.getSign(arg0); 
			console.log('bgnClass.getSign [*] arg0: ' + arg0);
 			console.log('bgnClass.getSign [*] ret: ' + ret);
 			return ret;
		};


		var SecurityManagerClass = Java.use('android.taobao.apirequest.SecurityManager');
		SecurityManagerClass.getInstance.overload().implementation = function () { 
			var ret = this.getInstance(); 
 			console.log('SecurityManagerClass.getInstance [*] ret: ' + ret);
 			return ret;
		};
		SecurityManagerClass.getMTopSign.overload('java.util.HashMap', 'java.lang.String').implementation = function (arg0, arg1) { 
			var ret = this.getMTopSign(arg0, arg1); 
			console.log('SecurityManagerClass.getMTopSign [*] arg0: ' + arg0);
			console.log('SecurityManagerClass.getMTopSign [*] arg1: ' + arg1);
 			console.log('SecurityManagerClass.getMTopSign [*] ret: ' + ret);
 			return ret;
		};
		SecurityManagerClass.getTopSing.overload('java.util.TreeMap', 'java.lang.String').implementation = function (arg0, arg1) { 
			var ret = this.getTopSing(arg0, arg1); 
			console.log('SecurityManagerClass.getTopSing [*] arg0: ' + arg0);
			console.log('SecurityManagerClass.getTopSing [*] arg1: ' + arg1);
 			console.log('SecurityManagerClass.getTopSing [*] ret: ' + ret);
 			return ret;
		};
		SecurityManagerClass.getLoginTopToken.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getLoginTopToken(arg0, arg1, arg2); 
			console.log('SecurityManagerClass.getLoginTopToken [*] arg0: ' + arg0);
			console.log('SecurityManagerClass.getLoginTopToken [*] arg1: ' + arg1);
			console.log('SecurityManagerClass.getLoginTopToken [*] arg2: ' + arg2);
 			console.log('SecurityManagerClass.getLoginTopToken [*] ret: ' + ret);
 			return ret;
		};
		SecurityManagerClass.getSign.overload('int', 'java.util.AbstractMap', 'java.lang.String').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getSign(arg0, arg1, arg2); 
			console.log('SecurityManagerClass.getSign [*] arg0: ' + arg0);
			console.log('SecurityManagerClass.getSign [*] arg1: ' + arg1);
			console.log('SecurityManagerClass.getSign [*] arg2: ' + arg2);
 			console.log('SecurityManagerClass.getSign [*] ret: ' + ret);
 			return ret;
		};
		SecurityManagerClass.init.overload('android.content.ContextWrapper').implementation = function (arg0) { 
			this.init(arg0); 
			console.log('SecurityManagerClass.init [*] arg0: ' + arg0);
  		};


		var SecretUtilClass = Java.use('com.taobao.securityjni.SecretUtil');
		SecretUtilClass.AttachImplObject.overload('java.lang.Object').implementation = function (arg0) { 
			this.AttachImplObject(arg0); 
			console.log('SecretUtilClass.AttachImplObject [*] arg0: ' + arg0);
  		};
		SecretUtilClass.getExternalSign.overload('java.util.LinkedHashMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getExternalSign(arg0, arg1); 
			console.log('SecretUtilClass.getExternalSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getExternalSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getExternalSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getLoginTopToken.overload('java.lang.String', 'java.lang.String').implementation = function (arg0, arg1) { 
			var ret = this.getLoginTopToken(arg0, arg1); 
			console.log('SecretUtilClass.getLoginTopToken [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getLoginTopToken [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getLoginTopToken [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getLoginTopToken.overload('java.lang.String', 'java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getLoginTopToken(arg0, arg1, arg2); 
			console.log('SecretUtilClass.getLoginTopToken [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getLoginTopToken [*] arg1: ' + arg1);
			console.log('SecretUtilClass.getLoginTopToken [*] arg2: ' + arg2);
 			console.log('SecretUtilClass.getLoginTopToken [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getMtopSign.overload('java.util.HashMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getMtopSign(arg0, arg1); 
			console.log('SecretUtilClass.getMtopSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getMtopSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getMtopSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getMtopV4RespSign.overload('java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getMtopV4RespSign(arg0, arg1); 
			console.log('SecretUtilClass.getMtopV4RespSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getMtopV4RespSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getMtopV4RespSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getMtopV4Sign.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) { 
			var ret = this.getMtopV4Sign(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10); 
			console.log('SecretUtilClass.getMtopV4Sign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg1: ' + arg1);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg2: ' + arg2);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg3: ' + arg3);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg4: ' + arg4);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg5: ' + arg5);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg6: ' + arg6);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg7: ' + arg7);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg8: ' + arg8);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg9: ' + arg9);
			console.log('SecretUtilClass.getMtopV4Sign [*] arg10: ' + arg10);
 			console.log('SecretUtilClass.getMtopV4Sign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getQianNiuSign.overload('[B', '[B').implementation = function (arg0, arg1) { 
			var ret = this.getQianNiuSign(arg0, arg1); 
			console.log('SecretUtilClass.getQianNiuSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getQianNiuSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getQianNiuSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getSign.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5) { 
			var ret = this.getSign(arg0, arg1, arg2, arg3, arg4, arg5); 
			console.log('SecretUtilClass.getSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getSign [*] arg1: ' + arg1);
			console.log('SecretUtilClass.getSign [*] arg2: ' + arg2);
			console.log('SecretUtilClass.getSign [*] arg3: ' + arg3);
			console.log('SecretUtilClass.getSign [*] arg4: ' + arg4);
			console.log('SecretUtilClass.getSign [*] arg5: ' + arg5);
 			console.log('SecretUtilClass.getSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getSign.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) { 
			var ret = this.getSign(arg0, arg1, arg2, arg3, arg4, arg5, arg6); 
			console.log('SecretUtilClass.getSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getSign [*] arg1: ' + arg1);
			console.log('SecretUtilClass.getSign [*] arg2: ' + arg2);
			console.log('SecretUtilClass.getSign [*] arg3: ' + arg3);
			console.log('SecretUtilClass.getSign [*] arg4: ' + arg4);
			console.log('SecretUtilClass.getSign [*] arg5: ' + arg5);
			console.log('SecretUtilClass.getSign [*] arg6: ' + arg6);
 			console.log('SecretUtilClass.getSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getSign.overload('java.util.HashMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getSign(arg0, arg1); 
			console.log('SecretUtilClass.getSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getTime.overload().implementation = function () { 
			var ret = this.getTime(); 
 			console.log('SecretUtilClass.getTime [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getTopSign.overload('java.util.TreeMap').implementation = function (arg0) { 
			var ret = this.getTopSign(arg0); 
			console.log('SecretUtilClass.getTopSign [*] arg0: ' + arg0);
 			console.log('SecretUtilClass.getTopSign [*] ret: ' + ret);
 			return ret;
		};
		SecretUtilClass.getTopSign.overload('java.util.TreeMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getTopSign(arg0, arg1); 
			console.log('SecretUtilClass.getTopSign [*] arg0: ' + arg0);
			console.log('SecretUtilClass.getTopSign [*] arg1: ' + arg1);
 			console.log('SecretUtilClass.getTopSign [*] ret: ' + ret);
 			return ret;
		};


		var CImplSecretUtilClass = Java.use('com.taobao.securityjni.impl.CImplSecretUtil');
		CImplSecretUtilClass.InitGlobalData.overload().implementation = function () { 
			this.InitGlobalData(); 
  		};
		CImplSecretUtilClass.getExternalSignByte.overload('[B', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getExternalSignByte(arg0, arg1); 
			console.log('CImplSecretUtilClass.getExternalSignByte [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getExternalSignByte [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getExternalSignByte [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getMtopV4RespByte.overload('[B', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getMtopV4RespByte(arg0, arg1); 
			console.log('CImplSecretUtilClass.getMtopV4RespByte [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getMtopV4RespByte [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getMtopV4RespByte [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getMtopV4SignByte.overload('[B', '[B', '[B', '[B', '[B', '[B', '[B', '[B', '[B', '[B', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) { 
			var ret = this.getMtopV4SignByte(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10); 
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg1: ' + arg1);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg2: ' + arg2);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg3: ' + arg3);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg4: ' + arg4);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg5: ' + arg5);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg6: ' + arg6);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg7: ' + arg7);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg8: ' + arg8);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg9: ' + arg9);
			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] arg10: ' + arg10);
 			console.log('CImplSecretUtilClass.getMtopV4SignByte [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getQianNiuSignByte.overload('[B', '[B').implementation = function (arg0, arg1) { 
			var ret = this.getQianNiuSignByte(arg0, arg1); 
			console.log('CImplSecretUtilClass.getQianNiuSignByte [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getQianNiuSignByte [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getQianNiuSignByte [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getSignNative.overload('[B', '[B', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getSignNative(arg0, arg1, arg2); 
			console.log('CImplSecretUtilClass.getSignNative [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getSignNative [*] arg1: ' + arg1);
			console.log('CImplSecretUtilClass.getSignNative [*] arg2: ' + arg2);
 			console.log('CImplSecretUtilClass.getSignNative [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getTopSignByte.overload('[B', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getTopSignByte(arg0, arg1); 
			console.log('CImplSecretUtilClass.getTopSignByte [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getTopSignByte [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getTopSignByte [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getTopToken.overload('[B', 'java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getTopToken(arg0, arg1, arg2); 
			console.log('CImplSecretUtilClass.getTopToken [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getTopToken [*] arg1: ' + arg1);
			console.log('CImplSecretUtilClass.getTopToken [*] arg2: ' + arg2);
 			console.log('CImplSecretUtilClass.getTopToken [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getExternalSign.overload('java.util.LinkedHashMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getExternalSign(arg0, arg1); 
			console.log('CImplSecretUtilClass.getExternalSign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getExternalSign [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getExternalSign [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getLoginTopToken.overload('java.lang.String', 'java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2) { 
			var ret = this.getLoginTopToken(arg0, arg1, arg2); 
			console.log('CImplSecretUtilClass.getLoginTopToken [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getLoginTopToken [*] arg1: ' + arg1);
			console.log('CImplSecretUtilClass.getLoginTopToken [*] arg2: ' + arg2);
 			console.log('CImplSecretUtilClass.getLoginTopToken [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getMtopSign.overload('java.util.HashMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getMtopSign(arg0, arg1); 
			console.log('CImplSecretUtilClass.getMtopSign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getMtopSign [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getMtopSign [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getMtopV4RespSign.overload('java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getMtopV4RespSign(arg0, arg1); 
			console.log('CImplSecretUtilClass.getMtopV4RespSign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getMtopV4RespSign [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getMtopV4RespSign [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getMtopV4Sign.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) { 
			var ret = this.getMtopV4Sign(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10); 
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg1: ' + arg1);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg2: ' + arg2);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg3: ' + arg3);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg4: ' + arg4);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg5: ' + arg5);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg6: ' + arg6);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg7: ' + arg7);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg8: ' + arg8);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg9: ' + arg9);
			console.log('CImplSecretUtilClass.getMtopV4Sign [*] arg10: ' + arg10);
 			console.log('CImplSecretUtilClass.getMtopV4Sign [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getQianNiuSign.overload('[B', '[B').implementation = function (arg0, arg1) { 
			var ret = this.getQianNiuSign(arg0, arg1); 
			console.log('CImplSecretUtilClass.getQianNiuSign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getQianNiuSign [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getQianNiuSign [*] ret: ' + ret);
 			return ret;
		};
		CImplSecretUtilClass.getTopSign.overload('java.util.TreeMap', 'com.taobao.securityjni.tools.DataContext').implementation = function (arg0, arg1) { 
			var ret = this.getTopSign(arg0, arg1); 
			console.log('CImplSecretUtilClass.getTopSign [*] arg0: ' + arg0);
			console.log('CImplSecretUtilClass.getTopSign [*] arg1: ' + arg1);
 			console.log('CImplSecretUtilClass.getTopSign [*] ret: ' + ret);
 			return ret;
		};


	});
});
