import React from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CreateAksesoris = () => {

  const navigate = useNavigate();

    const [nama, setNama] = React.useState("");
    const [ukuran, setUkuran] = React.useState("");
    const [warna, setWarna] = React.useState("");
    const [harga, setHarga] = React.useState("");
    const [stok, setStok] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "aksesoris"), {
                nama,
                ukuran,
                warna,
                harga,
                stok,
            });
            navigate("/aksesoris");
            MySwal.fire({
              icon: 'success',
              title: 'Data submitted successfully',
              text: `Your data has been submitted successfully`,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
        }
    };




  return (
    <div className="m-10">
        <div className="py-4">
        <Link to="/aksesoris" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Kembali Ke Halaman Data Aksesoris
        </Link>
        </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="ukuran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ukuran
          </label>
          <input
            type="text"
            id="ukuran"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="warna"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Warna
          </label>
          <input
            type="text"
            id="warna"
            value={warna}
            onChange={(e) => setWarna(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="harga"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Harga
          </label>
          <input
            type="text"
            id="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="stok"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stok
          </label>
          <input
            type="text"
            id="stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Tambah Data
        </button>
      </form>
    </div>
  );
};

export default CreateAksesoris;
