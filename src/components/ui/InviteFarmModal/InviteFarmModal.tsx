import { User } from '@/models/UserModel';
import React, { useState } from 'react';
import styles from "@/components/ui/InviteFarmModal/InviteFarmModal.module.css";
import PrimaryButton from '../PrimaryButton/primaryButton';
import { useRouter } from 'next/navigation'

interface InviteFarmModalProps {
  users: User[];
  onClose: () => void;
}

const InviteFarmModal: React.FC<InviteFarmModalProps> = ({ users, onClose }) => {
  const [email, setEmail] = useState('');
    const router = useRouter()
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        {/* Tombol untuk menutup modal */}
        <button className={styles.modalClose} onClick={onClose}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.3 16.3C16.2075 16.3927 16.0976 16.4663 15.9766 16.5164C15.8557 16.5666 15.726 16.5924 15.595 16.5924C15.464 16.5924 15.3343 16.5666 15.2134 16.5164C15.0924 16.4663 14.9825 16.3927 14.89 16.3L12 13.41L9.11 16.3C8.92302 16.487 8.66943 16.592 8.405 16.592C8.14057 16.592 7.88698 16.487 7.7 16.3C7.51302 16.113 7.40798 15.8594 7.40798 15.595C7.40798 15.4641 7.43377 15.3344 7.48387 15.2135C7.53398 15.0925 7.60742 14.9826 7.7 14.89L10.59 12L7.7 9.11C7.51302 8.92302 7.40798 8.66943 7.40798 8.405C7.40798 8.14057 7.51302 7.88698 7.7 7.7C7.88698 7.51302 8.14057 7.40798 8.405 7.40798C8.66943 7.40798 8.92302 7.51302 9.11 7.7L12 10.59L14.89 7.7C14.9826 7.60742 15.0925 7.53398 15.2135 7.48387C15.3344 7.43377 15.4641 7.40798 15.595 7.40798C15.7259 7.40798 15.8556 7.43377 15.9765 7.48387C16.0975 7.53398 16.2074 7.60742 16.3 7.7C16.3926 7.79258 16.466 7.90249 16.5161 8.02346C16.5662 8.14442 16.592 8.27407 16.592 8.405C16.592 8.53593 16.5662 8.66558 16.5161 8.78654C16.466 8.90751 16.3926 9.01742 16.3 9.11L13.41 12L16.3 14.89C16.68 15.27 16.68 15.91 16.3 16.3Z"
      fill="#B1B1B4"
    />
  </svg>
</button>

        {/* Header modal */}
        <h1 className={styles.modalTitle}>Tambah Peternakan</h1>

        {/* Form undangan */}
        <div className={styles.inviteForm}>
          <input
            type="email"
            placeholder="Masukkan Nama Peternakan"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.emailInput}
         
          />
          <PrimaryButton
          label= "Tambahkan"
          width= {139}
          onClick={() => router.push('/OwnerViewPage')}
          />

        </div>

        {/* Daftar pengguna */}
        <div className={styles.userList}>
          <h2 className={styles.userListTitle}>Peternakan yang Terdaftar</h2>
          {users.map((user) => (
            <div key={user.email} className={styles.userItem}>
              <img
                src={user.profile_url}
                alt={user.name}
                className={styles.userAvatar}
              />
              <div className={styles.userDetails}>
                <h3 className={styles.userName}>{user.name}</h3>
                <p className={styles.userEmail}>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InviteFarmModal;