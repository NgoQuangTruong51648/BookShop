
import styles from './AddBooks.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductByAdmin } from '../../../redux/apiRequest';

function AddBooks() {

    const user = useSelector((state) => state.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm();

    const onSubmit = data => addProductByAdmin(String(user.token), data,navigate, dispatch );

    return (
        <div className={styles.AddBooks}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.AddBooksForm} >
                <h1>Thêm Sách</h1>
                <label htmlFor="image">
                    Ảnh sách
                </label>
                <input 
                    type="text"
                    name="image"
                    id="image"
                    placeholder="nhập url ảnh của bạn"
                    {...register("image")}
                />

                <label htmlFor='bookName' >
                    Tên sách
                </label>
                <input
                    type="bookName"
                    name="bookName"
                    id="bookName"
                    placeholder='tên sách của bạn'
                    {...register("bookName")}
                />
                <label htmlFor='bookPrice' >
                    Giá sách
                </label>
                <input
                    type="bookPrice"
                    name="bookPrice"
                    id="bookPrice"
                    placeholder='giá sách của bạn'
                    {...register("bookPrice")}
                />
                <label htmlFor='bookCategory'>
                    Thể loại sách
                </label>
                <select 
                {...register("bookCategory")}
                id="bookCategory" name="bookCategory">
                    <option value="banhang">Bán hàng</option>
                    <option value="camhung">Cảm hứng</option>
                    <option value="bian">Bí ẩn</option>
                </select>
                <button className="submit">
                    Bấm vào để thêm sách
                </button>
            </form>
        </div>
    );
}

export default AddBooks;
