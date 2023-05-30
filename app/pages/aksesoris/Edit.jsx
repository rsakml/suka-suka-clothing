import React from "react";
import { db } from "@/app/firebase";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditAksesoris = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nama, setNama] = React.useState("");
  const [ukuran, setUkuran] = React.useState("");
  const [warna, setWarna] = React.useState("");
  const [harga, setHarga] = React.useState("");
  const [stok, setStok] = React.useState("");

  React.useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "aksesoris", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setNama(docSnap.data().nama);
        setUkuran(docSnap.data().ukuran);
        setWarna(docSnap.data().warna);
        setHarga(docSnap.data().harga);
        setStok(docSnap.data().stok);
      } else {
        console.log("No such document!");
      }
    };
    if (id) {
      fetchItem();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await updateDoc(doc(db, "aksesoris", id), {
        nama,
        ukuran,
        warna,
        harga,
        stok,
      });
      MySwal.fire({
        icon: "success",
        title: "Data submitted successfully",
        text: `Your data has been submitted successfully`,
      });
      navigate("/aksesoris");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    }
  };

  return (
    <div className="m-10">
      <div className="py-4">
        <Link
          to="/aksesoris"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
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
            name="nama"
            id="nama"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="ukuran"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ukuran
          </label>
          <input
            type="text"
            name="ukuran"
            id="ukuran"
            placeholder="ukuran"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="warna"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            warna
          </label>
          <input
            type="text"
            name="warna"
            id="warna"
            placeholder="warna"
            value={warna}
            onChange={(e) => setWarna(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="harga"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            harga
          </label>
          <input
            type="text"
            name="harga"
            id="harga"
            placeholder="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="stok"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            stok
          </label>
          <input
            type="text"
            name="stok"
            id="stok"
            placeholder="stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAksesoris;
