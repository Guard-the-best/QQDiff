<template>
  <div class="form-item">
    <p v-bind:for="id" class="formLabel" v-bind:class="{formTop:focused}">{{placeholder}}</p>

    <input 
      v-on:focus="focus" 
      v-on:blur="blur" 
      v-bind:type="type" 
      v-bind:name="name" 
      v-bind:id="id" 
      v-bind:value="value" 
      v-on:input="$emit('input',$event.target.value)" 
      class="form-style"
    />

    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'inputItem',
    data:function(){
      return{
        focused:false
      }
    },
    methods:{
      focus: function(){
        this.focused=true;
        this.$emit('inputing',true);
      },
      blur: function(){
        this.focused=false;
        this.$emit('inputing',false);
      }
    },
    props:[
        'placeholder',
        'type',
        'name',
        'id',
        'value'
    ]
}
</script>

<style>
.formTop {
  top: -22px !important;
  left: 26px;
  background-color: #fff;
  padding: 0 5px;
  font-size: 14px;
  color: #58bff6 !important;
}
div.form-item {
  position: relative;
  display: block;
  margin-bottom: 30px;
}
input {
  transition: all 0.2s ease;
}
input.form-style {
  color: #8a8a8a;
  display: block;
  width: 90%;
  height: 44px;
  padding: 5px 5%;
  border: 1px solid #ccc;
  -moz-border-radius: 27px;
  -webkit-border-radius: 27px;
  border-radius: 27px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  background-color: #fff;
  font-family: "HelveticaNeue", "Arial", sans-serif;
  font-size: 105%;
  letter-spacing: 0.8px;
}
div.form-item .form-style:focus {
  outline: none;
  border: 1px solid #58bff6;
  color: #58bff6;
}
div.form-item p.formLabel {
  position: absolute;
  left: 26px;
  top: 10px;
  transition: all 0.4s ease;
  color: #bbb;
}
.formTop {
  top: -22px !important;
  left: 26px;
  background-color: #fff;
  padding: 0 5px;
  font-size: 14px;
  color: #58bff6 !important;
}
</style>