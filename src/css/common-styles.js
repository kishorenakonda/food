import { StyleSheet } from 'react-native'

// If you create stylesheet in external and try to access in any file it will the css
// Try importing like this : import externalStyles from '../css/common-styles';

export default StyleSheet.create({
    "text": {
        fontSize: 20
    },
    "fs-20": {
        fontSize: 20
    },
    "m_t_10": {
        marginTop: 10
    },
    "m_t_20": {
        marginTop: 20
    },
    text_center: {
        alignItems: 'center'
    },
    "input_box": {
        borderWidth: 1,
        borderColor: '#CCC',
        marginTop: 10
    },
    "input_box_m_all_10": {
        borderWidth: 1,
        borderColor: '#CCC',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    text_heading: {
        fontSize: 30
    },
    overall_padding: {
        paddingHorizontal: 10
    },
    padding_tb_20: {
        paddingTop: 20,
        paddingBottom: 20
    },
    text_default_color: {
        color: '#ff1654'
    },
    input_box_css: {
        borderColor: '#ccc',
        borderBottomWidth: 1,
        fontSize: 20,
        paddingBottom: 10
    },
    b_all_1: {
        borderWidth: 1,
        borderColor: '#ccc'
    },
    text_white: {
        color: '#fff'
    },
    view_spacing: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    m_lr_10: {
        marginLeft: 10,
        marginRight: 10
    },
    fs_20: {
        fontSize: 20
    },
    text_grey: {
        color: '#ccc'
    },
    p_t_10: {
        paddingTop: 10
    }
});