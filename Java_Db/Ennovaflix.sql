PGDMP                          {        
   Ennovaflix    15.2    15.2 >    U           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            V           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            W           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            X           1262    24867 
   Ennovaflix    DATABASE        CREATE DATABASE "Ennovaflix" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
    DROP DATABASE "Ennovaflix";
                postgres    false            �            1259    24868    attore    TABLE     �   CREATE TABLE public.attore (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    cognome character varying(255) NOT NULL
);
    DROP TABLE public.attore;
       public         heap    postgres    false            �            1259    24873    Attore_ID_seq    SEQUENCE     �   ALTER TABLE public.attore ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Attore_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    24874    catalogo    TABLE     5  CREATE TABLE public.catalogo (
    id integer NOT NULL,
    titolo character varying(255) NOT NULL,
    id_tipologia integer NOT NULL,
    descrizione character varying(255),
    locandina character varying(255),
    anno_uscita character varying(255) NOT NULL,
    data_inserimento character varying(255)
);
    DROP TABLE public.catalogo;
       public         heap    postgres    false            �            1259    24879    Catalogo_ID_seq    SEQUENCE     �   ALTER TABLE public.catalogo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Catalogo_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    24880    genere    TABLE     d   CREATE TABLE public.genere (
    id integer NOT NULL,
    genere character varying(255) NOT NULL
);
    DROP TABLE public.genere;
       public         heap    postgres    false            �            1259    24886    Genere_ID_seq    SEQUENCE     �   ALTER TABLE public.genere ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Genere_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    24896    stagione    TABLE     �   CREATE TABLE public.stagione (
    id integer NOT NULL,
    titolo_stagione character varying(255) NOT NULL,
    id_catalogo integer NOT NULL,
    numero_stagione integer NOT NULL,
    data_uscita character varying(255)
);
    DROP TABLE public.stagione;
       public         heap    postgres    false            �            1259    24899    Stagione_ID_seq    SEQUENCE     �   ALTER TABLE public.stagione ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Stagione_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    24900 	   tipologia    TABLE     j   CREATE TABLE public.tipologia (
    id integer NOT NULL,
    tipologia character varying(255) NOT NULL
);
    DROP TABLE public.tipologia;
       public         heap    postgres    false            �            1259    24903    Tipologia_ID_seq    SEQUENCE     �   ALTER TABLE public.tipologia ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Tipologia_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    226            �            1259    24904    utente    TABLE     
  CREATE TABLE public.utente (
    id integer NOT NULL,
    nickname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    immagine character varying(255),
    notifiche character varying(255)
);
    DROP TABLE public.utente;
       public         heap    postgres    false            �            1259    24909    Utente_ID_seq    SEQUENCE     �   ALTER TABLE public.utente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Utente_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    228            �            1259    24910    video    TABLE     �   CREATE TABLE public.video (
    id integer NOT NULL,
    titolo character varying(255) NOT NULL,
    id_catalogo integer NOT NULL,
    durata character varying(255),
    url character varying(255)
);
    DROP TABLE public.video;
       public         heap    postgres    false            �            1259    24918    Video_ID_seq    SEQUENCE     �   ALTER TABLE public.video ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Video_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    230            �            1259    24883    genere_catalogo    TABLE     j   CREATE TABLE public.genere_catalogo (
    id_genere integer NOT NULL,
    id_catalogo integer NOT NULL
);
 #   DROP TABLE public.genere_catalogo;
       public         heap    postgres    false            �            1259    24887 	   preferiti    TABLE     d   CREATE TABLE public.preferiti (
    id_catalogo integer NOT NULL,
    id_utente integer NOT NULL
);
    DROP TABLE public.preferiti;
       public         heap    postgres    false            �            1259    24890    puntata    TABLE     �   CREATE TABLE public.puntata (
    id_stagione integer NOT NULL,
    id_video integer NOT NULL,
    numero_puntata integer NOT NULL,
    data_uscita character varying(255)
);
    DROP TABLE public.puntata;
       public         heap    postgres    false            �            1259    24893 
   recensione    TABLE     �   CREATE TABLE public.recensione (
    voto integer NOT NULL,
    recensione character varying(255),
    id_catalogo integer NOT NULL,
    id_utente integer NOT NULL,
    data_recensione character varying(255)
);
    DROP TABLE public.recensione;
       public         heap    postgres    false            �            1259    24915    video_attore    TABLE     d   CREATE TABLE public.video_attore (
    id_attore integer NOT NULL,
    id_video integer NOT NULL
);
     DROP TABLE public.video_attore;
       public         heap    postgres    false            @          0    24868    attore 
   TABLE DATA           3   COPY public.attore (id, nome, cognome) FROM stdin;
    public          postgres    false    214   �I       B          0    24874    catalogo 
   TABLE DATA           s   COPY public.catalogo (id, titolo, id_tipologia, descrizione, locandina, anno_uscita, data_inserimento) FROM stdin;
    public          postgres    false    216   �J       D          0    24880    genere 
   TABLE DATA           ,   COPY public.genere (id, genere) FROM stdin;
    public          postgres    false    218   �Q       E          0    24883    genere_catalogo 
   TABLE DATA           A   COPY public.genere_catalogo (id_genere, id_catalogo) FROM stdin;
    public          postgres    false    219   ^R       G          0    24887 	   preferiti 
   TABLE DATA           ;   COPY public.preferiti (id_catalogo, id_utente) FROM stdin;
    public          postgres    false    221   {R       H          0    24890    puntata 
   TABLE DATA           U   COPY public.puntata (id_stagione, id_video, numero_puntata, data_uscita) FROM stdin;
    public          postgres    false    222   �R       I          0    24893 
   recensione 
   TABLE DATA           _   COPY public.recensione (voto, recensione, id_catalogo, id_utente, data_recensione) FROM stdin;
    public          postgres    false    223   �R       J          0    24896    stagione 
   TABLE DATA           b   COPY public.stagione (id, titolo_stagione, id_catalogo, numero_stagione, data_uscita) FROM stdin;
    public          postgres    false    224   �R       L          0    24900 	   tipologia 
   TABLE DATA           2   COPY public.tipologia (id, tipologia) FROM stdin;
    public          postgres    false    226   �R       N          0    24904    utente 
   TABLE DATA           T   COPY public.utente (id, nickname, email, password, immagine, notifiche) FROM stdin;
    public          postgres    false    228   :S       P          0    24910    video 
   TABLE DATA           E   COPY public.video (id, titolo, id_catalogo, durata, url) FROM stdin;
    public          postgres    false    230   WS       Q          0    24915    video_attore 
   TABLE DATA           ;   COPY public.video_attore (id_attore, id_video) FROM stdin;
    public          postgres    false    231   tS       Y           0    0    Attore_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Attore_ID_seq"', 21, true);
          public          postgres    false    215            Z           0    0    Catalogo_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Catalogo_ID_seq"', 20, true);
          public          postgres    false    217            [           0    0    Genere_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Genere_ID_seq"', 15, true);
          public          postgres    false    220            \           0    0    Stagione_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Stagione_ID_seq"', 1, false);
          public          postgres    false    225            ]           0    0    Tipologia_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Tipologia_ID_seq"', 13, true);
          public          postgres    false    227            ^           0    0    Utente_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Utente_ID_seq"', 1, false);
          public          postgres    false    229            _           0    0    Video_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Video_ID_seq"', 1, false);
          public          postgres    false    232            �           2606    24920    attore Attore_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.attore
    ADD CONSTRAINT "Attore_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.attore DROP CONSTRAINT "Attore_pkey";
       public            postgres    false    214            �           2606    24922    genere Genere_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.genere
    ADD CONSTRAINT "Genere_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.genere DROP CONSTRAINT "Genere_pkey";
       public            postgres    false    218            �           2606    24924    catalogo ID 
   CONSTRAINT     K   ALTER TABLE ONLY public.catalogo
    ADD CONSTRAINT "ID" PRIMARY KEY (id);
 7   ALTER TABLE ONLY public.catalogo DROP CONSTRAINT "ID";
       public            postgres    false    216            �           2606    24926    stagione Stagione_pkey 
   CONSTRAINT     c   ALTER TABLE ONLY public.stagione
    ADD CONSTRAINT "Stagione_pkey" PRIMARY KEY (id) INCLUDE (id);
 B   ALTER TABLE ONLY public.stagione DROP CONSTRAINT "Stagione_pkey";
       public            postgres    false    224            �           2606    24928    tipologia Tipologia_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.tipologia
    ADD CONSTRAINT "Tipologia_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.tipologia DROP CONSTRAINT "Tipologia_pkey";
       public            postgres    false    226            �           2606    24930    utente Utente_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.utente
    ADD CONSTRAINT "Utente_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.utente DROP CONSTRAINT "Utente_pkey";
       public            postgres    false    228            �           2606    24932    video Video_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.video
    ADD CONSTRAINT "Video_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.video DROP CONSTRAINT "Video_pkey";
       public            postgres    false    230            �           2606    24933 #   catalogo Catalogo_ID_Tipologia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.catalogo
    ADD CONSTRAINT "Catalogo_ID_Tipologia_fkey" FOREIGN KEY (id_tipologia) REFERENCES public.tipologia(id) NOT VALID;
 O   ALTER TABLE ONLY public.catalogo DROP CONSTRAINT "Catalogo_ID_Tipologia_fkey";
       public          postgres    false    3232    216    226            �           2606    24938 1   genere_catalogo Genere-Categoria_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.genere_catalogo
    ADD CONSTRAINT "Genere-Categoria_ID_Catalogo_fkey" FOREIGN KEY (id_catalogo) REFERENCES public.catalogo(id) NOT VALID;
 ]   ALTER TABLE ONLY public.genere_catalogo DROP CONSTRAINT "Genere-Categoria_ID_Catalogo_fkey";
       public          postgres    false    219    216    3226            �           2606    24943 /   genere_catalogo Genere-Categoria_ID_Genere_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.genere_catalogo
    ADD CONSTRAINT "Genere-Categoria_ID_Genere_fkey" FOREIGN KEY (id_genere) REFERENCES public.genere(id) NOT VALID;
 [   ALTER TABLE ONLY public.genere_catalogo DROP CONSTRAINT "Genere-Categoria_ID_Genere_fkey";
       public          postgres    false    219    3228    218            �           2606    24948 $   preferiti Preferiti_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.preferiti
    ADD CONSTRAINT "Preferiti_ID_Catalogo_fkey" FOREIGN KEY (id_catalogo) REFERENCES public.catalogo(id) NOT VALID;
 P   ALTER TABLE ONLY public.preferiti DROP CONSTRAINT "Preferiti_ID_Catalogo_fkey";
       public          postgres    false    216    3226    221            �           2606    24953 "   preferiti Preferiti_ID_Utente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.preferiti
    ADD CONSTRAINT "Preferiti_ID_Utente_fkey" FOREIGN KEY (id_utente) REFERENCES public.utente(id) NOT VALID;
 N   ALTER TABLE ONLY public.preferiti DROP CONSTRAINT "Preferiti_ID_Utente_fkey";
       public          postgres    false    3234    228    221            �           2606    24958     puntata Puntata_ID_Stagione_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.puntata
    ADD CONSTRAINT "Puntata_ID_Stagione_fkey" FOREIGN KEY (id_stagione) REFERENCES public.stagione(id) NOT VALID;
 L   ALTER TABLE ONLY public.puntata DROP CONSTRAINT "Puntata_ID_Stagione_fkey";
       public          postgres    false    224    222    3230            �           2606    24963    puntata Puntata_ID_Video_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.puntata
    ADD CONSTRAINT "Puntata_ID_Video_fkey" FOREIGN KEY (id_video) REFERENCES public.video(id) NOT VALID;
 I   ALTER TABLE ONLY public.puntata DROP CONSTRAINT "Puntata_ID_Video_fkey";
       public          postgres    false    222    3236    230            �           2606    24968 &   recensione Recensione_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recensione
    ADD CONSTRAINT "Recensione_ID_Catalogo_fkey" FOREIGN KEY (id_catalogo) REFERENCES public.catalogo(id) NOT VALID;
 R   ALTER TABLE ONLY public.recensione DROP CONSTRAINT "Recensione_ID_Catalogo_fkey";
       public          postgres    false    223    216    3226            �           2606    24973 $   recensione Recensione_ID_Utente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.recensione
    ADD CONSTRAINT "Recensione_ID_Utente_fkey" FOREIGN KEY (id_utente) REFERENCES public.utente(id) NOT VALID;
 P   ALTER TABLE ONLY public.recensione DROP CONSTRAINT "Recensione_ID_Utente_fkey";
       public          postgres    false    223    228    3234            �           2606    24978 "   stagione Stagione_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.stagione
    ADD CONSTRAINT "Stagione_ID_Catalogo_fkey" FOREIGN KEY (id_catalogo) REFERENCES public.catalogo(id) NOT VALID;
 N   ALTER TABLE ONLY public.stagione DROP CONSTRAINT "Stagione_ID_Catalogo_fkey";
       public          postgres    false    216    3226    224            �           2606    24983 (   video_attore Video-Attore_ID_Attore_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.video_attore
    ADD CONSTRAINT "Video-Attore_ID_Attore_fkey" FOREIGN KEY (id_attore) REFERENCES public.attore(id) NOT VALID;
 T   ALTER TABLE ONLY public.video_attore DROP CONSTRAINT "Video-Attore_ID_Attore_fkey";
       public          postgres    false    214    231    3224            �           2606    24988 '   video_attore Video-Attore_ID_Video_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.video_attore
    ADD CONSTRAINT "Video-Attore_ID_Video_fkey" FOREIGN KEY (id_video) REFERENCES public.video(id) NOT VALID;
 S   ALTER TABLE ONLY public.video_attore DROP CONSTRAINT "Video-Attore_ID_Video_fkey";
       public          postgres    false    3236    231    230            �           2606    24993    video Video_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.video
    ADD CONSTRAINT "Video_ID_Catalogo_fkey" FOREIGN KEY (id_catalogo) REFERENCES public.catalogo(id) NOT VALID;
 H   ALTER TABLE ONLY public.video DROP CONSTRAINT "Video_ID_Catalogo_fkey";
       public          postgres    false    216    3226    230            @   
  x�-�Mn�@���)8A� �gIRZD�BM�l\��q䙔��5jw��g�=;�q����ѧ,'�g������ԩ�BՐJ��ƙѹ�8�V���	�wE�((֬�pa҅��;	�q	�RG�3�`Ӷ��΍��^3G��A�"�f�����HzeE7�W�BI9+��n
�����m1�
�:����#��'k�?3��m\؄'t(��J�.���꓅}���������8Û?K`3R�d�rp0;��p.�q���O����l�      B   �  x�m��r$5��5O����t�Y�M�	�0�	{��A�E�RU+PI�Tj�O���8m��W��$�ˬ��vu��R�_~�e>�^��S_���ݕ5��hJˋ5vYrI�XӒK��l���`�WsmӞe6m̐�dV��`G{w��;��>�ϋ����)8k>�,)ƛ���w�\�a��^�6��.�z\�1/�6���"���_dk�*a�6�m��n)��������hXn��7.,���Y�r"�h�!,�:-a�b���Xk�[B��\�����ԙ��,Eb6��Y�YZB��]����&fS��jz���9%o��B���̡!��� ���S��Ipw7��:�)�S�xw�~��y������e#�Ir��#�5/�/�&��:Ĵ�pv����fj%o1�4O.W.�Xm���/�и���xs.��晍��͆���1�6�M���v��n5��ƪ�}�].�e4C��I�*Tv�a�1d��Od!��[��Է�b��=�U[]��'�g�8S^�w�9���5���iYڲ($��: �l`:d�1����dv.y~Ͷ��T�W��Z��1�q��x�ک��8��E��dM��Qi76��8^rw���U8~ Ȩ��'%#���������J�$�BA�wjR���9���%F�������Z>pjHd�5n�+G'��V<��\H��W����q�g�,�^�;	��Y�Xj��9G{��Ƅi�)U ��OxtJ8r���t��I��\��=��a^�p�����n���2a�p��@�p YI��?����i�Z�rDɦ+w�I9���3Uf�˂�ʶڸS����6r�8r;��=���l�?�u���ν��� �#�h�?���	�x߰�E�'Pt`�I�����{Ą8T� :�V4�ͯ��@����,����Ќ�7���"fŧ�����\&xG����Y�>��P��@E�D7�Q���a�٭��k4��웊��!"}~�;��$�<�Pq��z��f�w�r�a'�O8���Ȇ����oJz�Y��!E��լS���t��}@4(���j̹,VD���9�<x����!�1/��eMaFS�f��R�}��T��|$̟l�����M."�wk!J�9�7�$�� {σ�^(A,c��!'���U��t��I��0)=o��񞺀���%�<cg�d����ng偖�E�U�RAe���F�z��B�eB$��%	�4@#��ȠBZ9��,>���&��H��h
$���h�W�! ⩤w��� ���+���^��6C!�s��j���Z�	ѻ���eL���*xIZ*�$\FXu���ҼD��7�e)�G��`�S�z��D�I��L8 u Zle0��oȹ�����yE1椼����L5(�AF|�`.r^�m��C[���ԇ7)A8��L���kcК�Q��YH}������a��u ���|�F\�iʜ�����G�?@Z�i���W�bd,��� 򢻰�BU�S���jv��"�3�H%��!�ߩx�[ �C�}��B�d ���#Q���57�%:����J\���2[8�H���������0���5/-��t`^� ��:����d�?ɘ �i�(bv����!����p�s�.���ح`q�wk|,V'
'j<�<vW�:��}̓N���Uׯ3\����8c�ɬ��Mt��h�]/ј�3��D����in@��OL;f��o�Ϟ=�?"T��      D   �   x�-��
�0E�3���>|,KE�B]�b�IF�i�~���<�ý�@9��fP���W�jJ�%�[�j	�ݙ���R��|��g�őp��7n����N�*�f�cKޡ1�$ѹ�dм�yj[�(��xNV�X��T����S�{�x["���;�      E      x������ � �      G      x������ � �      H      x������ � �      I      x������ � �      J      x������ � �      L   ;   x�34�t����24�.H-)IL����24�N-�L�24�t�O.�M�+I,������ ~��      N      x������ � �      P      x������ � �      Q      x������ � �     