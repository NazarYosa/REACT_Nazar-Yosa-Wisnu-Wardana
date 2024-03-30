Tentang React Hooks, ada beberapa poin penting yang perlu dipahami:

1. **Peningkatan dalam Pengelolaan State dan Side Effects:**

   - React Hooks memperkenalkan useState dan useEffect, yang memungkinkan pengelolaan state dan efek samping dalam functional components tanpa menggunakan kelas.
   - Dengan useState, komponen dapat memiliki state lokal yang mudah dikelola, sementara dengan useEffect, efek samping seperti pengambilan data dari server atau langkah-langkah penyesuaian DOM dapat dilakukan setiap kali terjadi perubahan pada komponen.

2. **Memungkinkan Logika Berbagi (Reuseable Logic):**

   - Dengan custom Hooks, pengembang dapat mengisolasi logika yang sering digunakan dalam satu tempat dan menggunakannya kembali di berbagai komponen.
   - Ini meningkatkan modularitas dan memudahkan untuk mengelola kode, menghindari repetisi, dan mempromosikan praktik pengkodean yang lebih bersih.

3. **Perbaikan Kinerja:**
   - Penggunaan React Hooks dapat memperbaiki kinerja aplikasi dengan memungkinkan React untuk melakukan optimasi internal yang lebih baik.
   - Hooks seperti useMemo dan useCallback memungkinkan memoisasi nilai dan fungsi untuk menghindari perhitungan yang mahal secara berulang, yang dapat meningkatkan kinerja aplikasi, terutama pada aplikasi yang kompleks dan besar.
