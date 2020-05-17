import { call, put, takeEvery, all} from "redux-saga/effects"
import {setAuthors, setShopItem} from "./ShopPage_Action";
import {fetchBooks} from "../../api/api";

export function* rootSaga (){
    yield all( [sagaWatcher()])

}
export function* sagaWatcher (){
    yield takeEvery("BOOKS_FETCH_REQUESTED", sagaWorker)

}
function* sagaWorker (action){
    try {
        const books = yield call(fetchBooks.getBooks, action.payload);
        yield put(setShopItem(books));

        const authors = yield call(fetchBooks.getAuthors);
        yield put(setAuthors(authors));

        // const CoverPhotos = yield call(fetchBooks.getCoverPhotos);
        // yield put(setCoverPhotos(CoverPhotos));

    } catch (e) {
        // yield put({type: "BOOKS_FETCH_REQUESTED", message: e.message});
    }
}





