PGDMP     7    -                {        
   Ennovaflix    15.2    15.1 >    U           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            V           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            W           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            X           1262    16690 
   Ennovaflix    DATABASE        CREATE DATABASE "Ennovaflix" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
    DROP DATABASE "Ennovaflix";
                postgres    false            �            1259    16729    Attore    TABLE     �   CREATE TABLE public."Attore" (
    "ID" integer NOT NULL,
    "Nome" character varying(255) NOT NULL,
    "Cognome" character varying(255) NOT NULL
);
    DROP TABLE public."Attore";
       public         heap    postgres    false            �            1259    16754    Attore_ID_seq    SEQUENCE     �   ALTER TABLE public."Attore" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Attore_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            �            1259    16704    Catalogo    TABLE     6  CREATE TABLE public."Catalogo" (
    "ID" integer NOT NULL,
    "Titolo" character varying(255) NOT NULL,
    "ID_Tipologia" integer NOT NULL,
    "Descrizione" character varying(255),
    "Locandina" character varying(255),
    "Media_Recensioni" double precision NOT NULL,
    "Is_Serie" boolean NOT NULL
);
    DROP TABLE public."Catalogo";
       public         heap    postgres    false            �            1259    16755    Catalogo_ID_seq    SEQUENCE     �   ALTER TABLE public."Catalogo" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Catalogo_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    16724    Genere    TABLE     j   CREATE TABLE public."Genere" (
    "ID" integer NOT NULL,
    "Genere" character varying(255) NOT NULL
);
    DROP TABLE public."Genere";
       public         heap    postgres    false            �            1259    16721    Genere_Catalogo    TABLE     p   CREATE TABLE public."Genere_Catalogo" (
    "ID_Genere" integer NOT NULL,
    "ID_Catalogo" integer NOT NULL
);
 %   DROP TABLE public."Genere_Catalogo";
       public         heap    postgres    false            �            1259    16763    Genere_ID_seq    SEQUENCE     �   ALTER TABLE public."Genere" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Genere_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221            �            1259    16751 	   Preferiti    TABLE     j   CREATE TABLE public."Preferiti" (
    "ID_Catalogo" integer NOT NULL,
    "ID_Utente" integer NOT NULL
);
    DROP TABLE public."Preferiti";
       public         heap    postgres    false            �            1259    16701    Puntata    TABLE     �   CREATE TABLE public."Puntata" (
    "ID_Stagione" integer NOT NULL,
    "ID_Video" integer NOT NULL,
    "Numero_Puntata" integer NOT NULL
);
    DROP TABLE public."Puntata";
       public         heap    postgres    false            �            1259    16748 
   Recensione    TABLE     �   CREATE TABLE public."Recensione" (
    "Voto" integer NOT NULL,
    "Recensione" character varying(255),
    "ID_Catalogo" integer NOT NULL,
    "ID_Utente" integer NOT NULL
);
     DROP TABLE public."Recensione";
       public         heap    postgres    false            �            1259    16711    Stagione    TABLE     �   CREATE TABLE public."Stagione" (
    "ID" integer NOT NULL,
    "Titolo_Stagione" character varying(255) NOT NULL,
    "ID_Catalogo" integer NOT NULL,
    "Numero_Stagione" integer NOT NULL
);
    DROP TABLE public."Stagione";
       public         heap    postgres    false            �            1259    16786    Stagione_ID_seq    SEQUENCE     �   ALTER TABLE public."Stagione" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Stagione_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �            1259    16716 	   Tipologia    TABLE     p   CREATE TABLE public."Tipologia" (
    "ID" integer NOT NULL,
    "Tipologia" character varying(255) NOT NULL
);
    DROP TABLE public."Tipologia";
       public         heap    postgres    false            �            1259    16812    Tipologia_ID_seq    SEQUENCE     �   ALTER TABLE public."Tipologia" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Tipologia_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    16741    Utente    TABLE     �   CREATE TABLE public."Utente" (
    "ID" integer NOT NULL,
    "Nickname" character varying(255) NOT NULL,
    "Email" character varying(255) NOT NULL,
    "Password" character varying(255) NOT NULL,
    "Immagine" character varying(255)
);
    DROP TABLE public."Utente";
       public         heap    postgres    false            �            1259    16813    Utente_ID_seq    SEQUENCE     �   ALTER TABLE public."Utente" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Utente_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    224            �            1259    16691    Video    TABLE     �   CREATE TABLE public."Video" (
    "ID" integer NOT NULL,
    "Titolo" character varying NOT NULL,
    "ID_Catalogo" integer NOT NULL,
    "Durata" character varying
);
    DROP TABLE public."Video";
       public         heap    postgres    false            �            1259    16736    Video_Attore    TABLE     j   CREATE TABLE public."Video_Attore" (
    "ID_Attore" integer NOT NULL,
    "ID_Video" integer NOT NULL
);
 "   DROP TABLE public."Video_Attore";
       public         heap    postgres    false            �            1259    16698    Video_ID_seq    SEQUENCE     �   ALTER TABLE public."Video" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Video_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            H          0    16729    Attore 
   TABLE DATA           ;   COPY public."Attore" ("ID", "Nome", "Cognome") FROM stdin;
    public          postgres    false    222   BJ       C          0    16704    Catalogo 
   TABLE DATA           �   COPY public."Catalogo" ("ID", "Titolo", "ID_Tipologia", "Descrizione", "Locandina", "Media_Recensioni", "Is_Serie") FROM stdin;
    public          postgres    false    217   \K       G          0    16724    Genere 
   TABLE DATA           2   COPY public."Genere" ("ID", "Genere") FROM stdin;
    public          postgres    false    221   ]R       F          0    16721    Genere_Catalogo 
   TABLE DATA           G   COPY public."Genere_Catalogo" ("ID_Genere", "ID_Catalogo") FROM stdin;
    public          postgres    false    220   
S       L          0    16751 	   Preferiti 
   TABLE DATA           A   COPY public."Preferiti" ("ID_Catalogo", "ID_Utente") FROM stdin;
    public          postgres    false    226   'S       B          0    16701    Puntata 
   TABLE DATA           P   COPY public."Puntata" ("ID_Stagione", "ID_Video", "Numero_Puntata") FROM stdin;
    public          postgres    false    216   DS       K          0    16748 
   Recensione 
   TABLE DATA           X   COPY public."Recensione" ("Voto", "Recensione", "ID_Catalogo", "ID_Utente") FROM stdin;
    public          postgres    false    225   aS       D          0    16711    Stagione 
   TABLE DATA           _   COPY public."Stagione" ("ID", "Titolo_Stagione", "ID_Catalogo", "Numero_Stagione") FROM stdin;
    public          postgres    false    218   ~S       E          0    16716 	   Tipologia 
   TABLE DATA           8   COPY public."Tipologia" ("ID", "Tipologia") FROM stdin;
    public          postgres    false    219   �S       J          0    16741    Utente 
   TABLE DATA           U   COPY public."Utente" ("ID", "Nickname", "Email", "Password", "Immagine") FROM stdin;
    public          postgres    false    224   �S       @          0    16691    Video 
   TABLE DATA           J   COPY public."Video" ("ID", "Titolo", "ID_Catalogo", "Durata") FROM stdin;
    public          postgres    false    214   T       I          0    16736    Video_Attore 
   TABLE DATA           A   COPY public."Video_Attore" ("ID_Attore", "ID_Video") FROM stdin;
    public          postgres    false    223    T       Y           0    0    Attore_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Attore_ID_seq"', 21, true);
          public          postgres    false    227            Z           0    0    Catalogo_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Catalogo_ID_seq"', 20, true);
          public          postgres    false    228            [           0    0    Genere_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Genere_ID_seq"', 15, true);
          public          postgres    false    229            \           0    0    Stagione_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Stagione_ID_seq"', 1, false);
          public          postgres    false    230            ]           0    0    Tipologia_ID_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."Tipologia_ID_seq"', 13, true);
          public          postgres    false    231            ^           0    0    Utente_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Utente_ID_seq"', 1, false);
          public          postgres    false    232            _           0    0    Video_ID_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Video_ID_seq"', 1, false);
          public          postgres    false    215            �           2606    16735    Attore Attore_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Attore"
    ADD CONSTRAINT "Attore_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Attore" DROP CONSTRAINT "Attore_pkey";
       public            postgres    false    222            �           2606    16728    Genere Genere_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Genere"
    ADD CONSTRAINT "Genere_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Genere" DROP CONSTRAINT "Genere_pkey";
       public            postgres    false    221            �           2606    16757    Catalogo ID 
   CONSTRAINT     O   ALTER TABLE ONLY public."Catalogo"
    ADD CONSTRAINT "ID" PRIMARY KEY ("ID");
 9   ALTER TABLE ONLY public."Catalogo" DROP CONSTRAINT "ID";
       public            postgres    false    217            �           2606    16785    Stagione Stagione_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public."Stagione"
    ADD CONSTRAINT "Stagione_pkey" PRIMARY KEY ("ID") INCLUDE ("ID");
 D   ALTER TABLE ONLY public."Stagione" DROP CONSTRAINT "Stagione_pkey";
       public            postgres    false    218            �           2606    16720    Tipologia Tipologia_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Tipologia"
    ADD CONSTRAINT "Tipologia_pkey" PRIMARY KEY ("ID");
 F   ALTER TABLE ONLY public."Tipologia" DROP CONSTRAINT "Tipologia_pkey";
       public            postgres    false    219            �           2606    16747    Utente Utente_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Utente"
    ADD CONSTRAINT "Utente_pkey" PRIMARY KEY ("ID");
 @   ALTER TABLE ONLY public."Utente" DROP CONSTRAINT "Utente_pkey";
       public            postgres    false    224            �           2606    16700    Video Video_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_pkey" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Video" DROP CONSTRAINT "Video_pkey";
       public            postgres    false    214            �           2606    16758 #   Catalogo Catalogo_ID_Tipologia_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Catalogo"
    ADD CONSTRAINT "Catalogo_ID_Tipologia_fkey" FOREIGN KEY ("ID_Tipologia") REFERENCES public."Tipologia"("ID") NOT VALID;
 Q   ALTER TABLE ONLY public."Catalogo" DROP CONSTRAINT "Catalogo_ID_Tipologia_fkey";
       public          postgres    false    219    217    3230            �           2606    16769 1   Genere_Catalogo Genere-Categoria_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Genere_Catalogo"
    ADD CONSTRAINT "Genere-Categoria_ID_Catalogo_fkey" FOREIGN KEY ("ID_Catalogo") REFERENCES public."Catalogo"("ID") NOT VALID;
 _   ALTER TABLE ONLY public."Genere_Catalogo" DROP CONSTRAINT "Genere-Categoria_ID_Catalogo_fkey";
       public          postgres    false    217    3226    220            �           2606    16764 /   Genere_Catalogo Genere-Categoria_ID_Genere_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Genere_Catalogo"
    ADD CONSTRAINT "Genere-Categoria_ID_Genere_fkey" FOREIGN KEY ("ID_Genere") REFERENCES public."Genere"("ID") NOT VALID;
 ]   ALTER TABLE ONLY public."Genere_Catalogo" DROP CONSTRAINT "Genere-Categoria_ID_Genere_fkey";
       public          postgres    false    221    3232    220            �           2606    16774 $   Preferiti Preferiti_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Preferiti"
    ADD CONSTRAINT "Preferiti_ID_Catalogo_fkey" FOREIGN KEY ("ID_Catalogo") REFERENCES public."Catalogo"("ID") NOT VALID;
 R   ALTER TABLE ONLY public."Preferiti" DROP CONSTRAINT "Preferiti_ID_Catalogo_fkey";
       public          postgres    false    3226    226    217            �           2606    16779 "   Preferiti Preferiti_ID_Utente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Preferiti"
    ADD CONSTRAINT "Preferiti_ID_Utente_fkey" FOREIGN KEY ("ID_Utente") REFERENCES public."Utente"("ID") NOT VALID;
 P   ALTER TABLE ONLY public."Preferiti" DROP CONSTRAINT "Preferiti_ID_Utente_fkey";
       public          postgres    false    224    226    3236            �           2606    16787     Puntata Puntata_ID_Stagione_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Puntata"
    ADD CONSTRAINT "Puntata_ID_Stagione_fkey" FOREIGN KEY ("ID_Stagione") REFERENCES public."Stagione"("ID") NOT VALID;
 N   ALTER TABLE ONLY public."Puntata" DROP CONSTRAINT "Puntata_ID_Stagione_fkey";
       public          postgres    false    216    3228    218            �           2606    16792    Puntata Puntata_ID_Video_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Puntata"
    ADD CONSTRAINT "Puntata_ID_Video_fkey" FOREIGN KEY ("ID_Video") REFERENCES public."Video"("ID") NOT VALID;
 K   ALTER TABLE ONLY public."Puntata" DROP CONSTRAINT "Puntata_ID_Video_fkey";
       public          postgres    false    214    3224    216            �           2606    16797 &   Recensione Recensione_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Recensione"
    ADD CONSTRAINT "Recensione_ID_Catalogo_fkey" FOREIGN KEY ("ID_Catalogo") REFERENCES public."Catalogo"("ID") NOT VALID;
 T   ALTER TABLE ONLY public."Recensione" DROP CONSTRAINT "Recensione_ID_Catalogo_fkey";
       public          postgres    false    3226    225    217            �           2606    16802 $   Recensione Recensione_ID_Utente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Recensione"
    ADD CONSTRAINT "Recensione_ID_Utente_fkey" FOREIGN KEY ("ID_Utente") REFERENCES public."Utente"("ID") NOT VALID;
 R   ALTER TABLE ONLY public."Recensione" DROP CONSTRAINT "Recensione_ID_Utente_fkey";
       public          postgres    false    224    3236    225            �           2606    16807 "   Stagione Stagione_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Stagione"
    ADD CONSTRAINT "Stagione_ID_Catalogo_fkey" FOREIGN KEY ("ID_Catalogo") REFERENCES public."Catalogo"("ID") NOT VALID;
 P   ALTER TABLE ONLY public."Stagione" DROP CONSTRAINT "Stagione_ID_Catalogo_fkey";
       public          postgres    false    218    217    3226            �           2606    16824 (   Video_Attore Video-Attore_ID_Attore_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Video_Attore"
    ADD CONSTRAINT "Video-Attore_ID_Attore_fkey" FOREIGN KEY ("ID_Attore") REFERENCES public."Attore"("ID") NOT VALID;
 V   ALTER TABLE ONLY public."Video_Attore" DROP CONSTRAINT "Video-Attore_ID_Attore_fkey";
       public          postgres    false    223    222    3234            �           2606    16819 '   Video_Attore Video-Attore_ID_Video_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Video_Attore"
    ADD CONSTRAINT "Video-Attore_ID_Video_fkey" FOREIGN KEY ("ID_Video") REFERENCES public."Video"("ID") NOT VALID;
 U   ALTER TABLE ONLY public."Video_Attore" DROP CONSTRAINT "Video-Attore_ID_Video_fkey";
       public          postgres    false    214    3224    223            �           2606    16814    Video Video_ID_Catalogo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Video"
    ADD CONSTRAINT "Video_ID_Catalogo_fkey" FOREIGN KEY ("ID_Catalogo") REFERENCES public."Catalogo"("ID") NOT VALID;
 J   ALTER TABLE ONLY public."Video" DROP CONSTRAINT "Video_ID_Catalogo_fkey";
       public          postgres    false    3226    217    214            H   
  x�-�Mn�@���)8A� �gIRZD�BM�l\��q䙔��5jw��g�=;�q����ѧ,'�g������ԩ�BՐJ��ƙѹ�8�V���	�wE�((֬�pa҅��;	�q	�RG�3�`Ӷ��΍��^3G��A�"�f�����HzeE7�W�BI9+��n
�����m1�
�:����#��'k�?3��m\؄'t(��J�.���꓅}���������8Û?K`3R�d�rp0;��p.�q���O����l�      C   �  x�e��r��׭���̝�6V�B6抐�aAq�MMuuO�UMU׀��5����
z?	_f�$�!�g��'��9'�y����ڝ=ﮬ������Xc�%���5-���yΦ,	�N��i�mڳ̦�r���
#'����y�޺�����=k�s
Κ/=K����>��7m���ǭ��ϵ�n��M�l�id�W�ߚoK��Ma���u���E����n�/��f�{��r��̬s9�\��y��0�a����&_I��Fj%k�{���3/�Y�dll������6�q^vA�;^��M]�Ҫ�%�甼I|_���7.��\��X_�:�`���$�O������:�)�S����Y��y������eeI궳#�k^_�M>s"�iX���%��J�rx��\� �j���?_�|(�ݜ�/$yj��$�f�E|�1�4�M����<ܽ�jboϻ��Uw�H&��!N�(R�����#3������}k��V�UP��b�+%���@f�K8���~�������Q��-�@��k�����#�ݝ-�MQ�g��lh�iN�y�<���ȸPs\W|Ot��9��`q�}��IR/�uc�yG�%wgwo��F�)	9��]�xH���TG*(�C�S��'mX�YK�Dt2���
>pkHԑ5n�W'�D^+A .��4��l�T}����`'a�P;��E�;;�h��1a�� 
��q􉈔"
ܸ
����2���~@�L����3���z/B��.G%�����yw�8���F�]�� �RƵbO����4c �Pr��]s�\q�yFR��,�쪍�c5b��NB�F9�G��<�W�z'�O��5��R��m{��]��G�W�Ԍ���x�8Ob�(~�I�����'l�$Ծ`5Re+������ƀZz�!u�*��q1�B�Ƶ�X6�4U�*ܭ�L�i���YO}��d�k�00�kX�zr�������s�oj߇��M��y�k���<û�����9 �,a'\OD�5�1�Ņ�?���ߚy��PD��c%�b�L�{u�&�	I���b�e��G�I���!ڕ���M��x�Z[��e�C���K��E6Gz�l^
�'[�����'1�g�*9i$����Ge%���C�.d ��I[�kż�BD:FϤ�z0>(]m���9@\ڄ�ǅ9g�^,���ng�M�mI����r�C��>�"��e����)�"�� BM)���QɟJ�x�N�$�T��wt�+)e���>@fP�������$��N����\%�uS+[+!�l��ɉ-3@���4�J*R�;��(�ں8a�\�I�o/.�kHXp$Q����<��
L: �p��_u�O��B}�Z+-�c��9�^2܏���I����Vp��\��\��7�q��0�b7�'	+�:�
$�Y&�����@M����4�������eDĞlt�r5����tJ2g�/�q
?����J9����Z�`��L�Dp�Ù�q�]XJ��`!ɩUH�|�z]@Ddw�lH�4�i������b��mP&i���=2�T���Ss���sd����%�g>���Y�	�0R_�*ra;Gk^[�Si�̰P?��:k������?� �iWD1;i��aB�������sf)m��խ q��V�,Vg'�i2�2vW�F�&}������-֯�Y�y��8�rp��=��^+��^��S�)Q����a�ah[���N�vL!~�4��=99��Xw�      G   �   x�-��
�0E�3���>|,KE�B]�b�IF�i�~���<�ý�@9��fP���W�jJ�%�[�j	�ݙ���R��|��g�őp��7n����N�*�f�cKޡ1�$ѹ�dм�yj[�(��xNV�X��T����S�{�x["���;�      F      x������ � �      L      x������ � �      B      x������ � �      K      x������ � �      D      x������ � �      E   ;   x�34�t����24�.H-)IL����24�N-�L�24�t�O.�M�+I,������ ~��      J      x������ � �      @      x������ � �      I      x������ � �     