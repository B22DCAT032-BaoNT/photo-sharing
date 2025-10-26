// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Bật chế độ tối
        primary: {
            main: '#e50914', // Màu đỏ đặc trưng của Netflix / ZoneH XSEC
        },
        secondary: {
            main: '#8a060b', // Một sắc đỏ tối hơn
        },
        background: {
            default: '#141414', // Nền tổng thể
            paper: '#1a1a1a', // Nền cho các Paper components
        },
        text: {
            primary: '#e5e5e5', // Màu chữ chính
            secondary: '#b3b3b3', // Màu chữ phụ
        },
    },
    typography: {
        fontFamily: [
            'Roboto', // Phông chữ chính
            'sans-serif',
        ].join(','),
        h4: {
            color: '#e50914', // Tiêu đề lớn màu đỏ
        },
        h6: {
            color: '#e5e5e5',
        },
        subtitle1: {
            color: '#e5e5e5',
        },
        caption: {
            color: '#b3b3b3',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // AppBar màu đen tuyền
                    borderBottom: '1px solid #e50914', // Đường viền đỏ phía dưới
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: '#e5e5e5', // Màu chữ cho tên người dùng trong list
                },
                secondary: {
                    color: '#b3b3b3', // Màu chữ phụ trong comment
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#e5e5e5', // Màu chữ trên nút
                    backgroundColor: '#e50914', // Nền nút màu đỏ
                    '&:hover': {
                        backgroundColor: '#8a060b', // Hover màu đỏ sẫm hơn
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#444444', // Màu divider tối hơn
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#e50914', // Các liên kết màu đỏ
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
    },
});

export default theme;