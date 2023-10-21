"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3203],{93203:function(e,t,n){function words(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{asn1:function(){return asn1}});let r={keywords:words("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:words("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:words("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:words("current deprecated mandatory obsolete"),tags:words("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:words("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:words("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:words("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0};function asn1(e){var t,n=e.keywords||r.keywords,i=e.cmipVerbs||r.cmipVerbs,o=e.compareTypes||r.compareTypes,s=e.status||r.status,a=e.tags||r.tags,E=e.storage||r.storage,I=e.modifier||r.modifier,T=e.accessTypes||r.accessTypes,u=e.multiLineStrings||r.multiLineStrings,p=!1!==e.indentStatements,S=/[\|\^]/;function Context(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function pushContext(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new Context(r,t,n,null,e.context)}function popContext(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}return{name:"asn1",startState:function(){return{tokenize:null,context:new Context(-2,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,r){var l=r.context;if(e.sol()&&(null==l.align&&(l.align=!1),r.indented=e.indentation(),r.startOfLine=!0),e.eatSpace())return null;t=null;var N=(r.tokenize||function(e,r){var p=e.next();if('"'==p||"'"==p)return r.tokenize=function(e,t){for(var n,r=!1,i=!1;null!=(n=e.next());){if(n==p&&!r){var o=e.peek();o&&("b"==(o=o.toLowerCase())||"h"==o||"o"==o)&&e.next(),i=!0;break}r=!r&&"\\"==n}return(i||!(r||u))&&(t.tokenize=null),"string"},r.tokenize(e,r);if(/[\[\]\(\){}:=,;]/.test(p))return t=p,"punctuation";if("-"==p&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(p))return e.eatWhile(/[\w\.]/),"number";if(S.test(p))return e.eatWhile(S),"operator";e.eatWhile(/[\w\-]/);var l=e.current();return n.propertyIsEnumerable(l)?"keyword":i.propertyIsEnumerable(l)?"variableName":o.propertyIsEnumerable(l)?"atom":s.propertyIsEnumerable(l)?"comment":a.propertyIsEnumerable(l)?"typeName":E.propertyIsEnumerable(l)||I.propertyIsEnumerable(l)||T.propertyIsEnumerable(l)?"modifier":"variableName"})(e,r);if("comment"==N)return N;if(null==l.align&&(l.align=!0),(";"==t||":"==t||","==t)&&"statement"==l.type)popContext(r);else if("{"==t)pushContext(r,e.column(),"}");else if("["==t)pushContext(r,e.column(),"]");else if("("==t)pushContext(r,e.column(),")");else if("}"==t){for(;"statement"==l.type;)l=popContext(r);for("}"==l.type&&(l=popContext(r));"statement"==l.type;)l=popContext(r)}else t==l.type?popContext(r):p&&(("}"==l.type||"top"==l.type)&&";"!=t||"statement"==l.type&&"newstatement"==t)&&pushContext(r,e.column(),"statement");return r.startOfLine=!1,N},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}}}]);