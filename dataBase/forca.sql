-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Abr-2023 às 22:13
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `forca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `palavras`
--

CREATE TABLE `palavras` (
  `id_palvra` int(11) NOT NULL,
  `nome_palavra` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `palavras`
--

INSERT INTO `palavras` (`id_palvra`, `nome_palavra`) VALUES
(1, 'abelha'),
(2, 'musculo'),
(3, 'piscina'),
(4, 'turma da monica'),
(5, 'the wichter'),
(6, 'friends'),
(7, 'Apenas Um Show'),
(8, 'turma da monica'),
(9, 'Jão Pessoa'),
(10, 'João e Maria Caçador de Bruxas'),
(11, 'github'),
(12, 'murder in my mind'),
(13, 'land of the fire'),
(14, 'Pirates'),
(15, 'Lazaro Talarico'),
(16, 'Ocean'),
(17, 'Terra'),
(18, 'Montanha ');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `palavras`
--
ALTER TABLE `palavras`
  ADD PRIMARY KEY (`id_palvra`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `palavras`
--
ALTER TABLE `palavras`
  MODIFY `id_palvra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
